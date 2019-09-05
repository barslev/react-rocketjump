import { useEffect, useReducer, useContext } from 'react'
import { Subject, ReplaySubject } from 'rxjs'
import { useConstant } from './hooks'
import ConfigureRjContext from './ConfigureRjContext'
import { isEffectAction } from './actionCreators'
import createRjDebugEmitter from './debugger/emitter'
import { INIT } from './actionTypes'

const NoMutationState = {}

// A "mini" redux
// a reducer for handle state
// and the roboust rxjs to handle complex side effecs in a pure, declarative, fancy way!
export default function useMiniRedux(
  reducer,
  makeObservable,
  hasMutationsState,
  debugInfo
) {
  // ACTION$ -> RX -> React Hook dispatch()
  const actionSubject = useConstant(() => new Subject())
  const action$ = useConstant(() => actionSubject.asObservable())

  // STATE$ reducer() -> nextState -> reducer(nextState)
  const stateSubject = useConstant(() => new ReplaySubject())
  const state$ = useConstant(() => stateSubject.asObservable())

  const debugEmitter = useConstant(() => createRjDebugEmitter(debugInfo))

  // Emit a state update to state$
  // ... keep a reference of current state
  function emitStateUpdate(nextState) {
    if (state$.value !== nextState) {
      state$.value = nextState
      stateSubject.next(nextState)
    }
  }

  // Proxy reducer to have always the state$ observable in sync
  // with the action dispatched
  function initReducer(initialArg) {
    const initialState = reducer(initialArg, { type: INIT })
    emitStateUpdate(initialState)
    if (process.env.NODE_ENV !== 'production') {
      debugEmitter.onStateInitialized(initialState)
      state$.__dispatchIndex = 0
      return { idx: 0, state: initialState }
    } else {
      return initialState
    }
  }
  // Add emit on state changes and debug track in DEV only
  function proxyReducer(prevState, action) {
    if (process.env.NODE_ENV !== 'production') {
      const nextState = reducer(prevState.state, action)
      emitStateUpdate(nextState)
      const idx = prevState.idx + 1
      if (idx > state$.__dispatchIndex) {
        debugEmitter.onActionDispatched(action, prevState.state, nextState)
        state$.__dispatchIndex = idx
      }
      return { idx, state: nextState }
    }
    const nextState = reducer(prevState, action)
    emitStateUpdate(nextState)
    return nextState
  }
  const [stateAndIdx, dispatch] = useReducer(
    proxyReducer,
    undefined,
    initReducer
  )
  const state =
    process.env.NODE_ENV !== 'production' ? stateAndIdx.state : stateAndIdx

  const extraConfig = useContext(ConfigureRjContext)
  const subscription = useConstant(() => {
    // Dispatch the action returned from observable
    return makeObservable(
      action$,
      state$,
      extraConfig ? extraConfig.effectCaller : undefined
    ).subscribe(dispatch)
  })

  // On unmount unsub
  useEffect(() => {
    return () => {
      subscription.unsubscribe()
      debugEmitter.onTeardown()
    }
  }, [subscription, debugEmitter])

  const dispatchWithEffect = useConstant(() => action => {
    if (isEffectAction(action)) {
      // Emit action to given observable theese perform side
      // effect and emit action dispatched above by subscription
      actionSubject.next(action)
    } else {
      // Update the state \w given reducer
      dispatch(action)
    }
  })

  const mainState = hasMutationsState ? state.root : state
  const mutationsState = hasMutationsState ? state.mutations : NoMutationState

  return [mainState, mutationsState, dispatchWithEffect]
}
