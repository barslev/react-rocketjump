/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { FunctionComponent } from 'react'
import { rj, rjPlugin, connectRj, INIT } from '.'
import { RjBaseActionCreators, Reducer, Action } from './core/types'
import rjPlainList from './plugins/plainList'
import rjList, { nextPreviousPaginationAdapter } from './plugins/list'
import { BoundActionCreatorsWithBuilder } from './core/actions/bindActionCreators'
import { map, withLatestFrom } from 'rxjs/operators'
import { useRj } from './react'

function stateShape() {
  const ObjA = rj({
    effect: () => Promise.resolve(23),
  })

  const state = ObjA.reducer(undefined, { type: INIT })

  type TEST_ROOT_SHAPE = {
    data: any
    pending: boolean
    error: any
  }
  type TEST_SHAPE = {
    root: TEST_ROOT_SHAPE
  }

  const stateT: TEST_SHAPE = state

  const computedState = ObjA.computeState(state, ObjA.makeSelectors())
  const computedStateT: TEST_ROOT_SHAPE = computedState
}

function reducerExtendStateShape() {
  type BASE_ROOT_TEST_SHAPE = {
    data: any
    pending: boolean
    error: any
  }

  const ObjA = rj({
    reducer: (r) => (state, action) => {
      const stateT: BASE_ROOT_TEST_SHAPE = r(state, action)

      return {
        ...r(state, action),
        argo: 88,
      }
    },
    effect: () => Promise.resolve(23),
  })

  const state = ObjA.reducer(undefined, { type: INIT })

  type TEST_ROOT_SHAPE = {
    data: any
    pending: boolean
    error: any
    argo: number
  }
  type TEST_SHAPE = {
    root: TEST_ROOT_SHAPE
  }

  const stateT: TEST_SHAPE = state

  const computedState = ObjA.computeState(state, ObjA.makeSelectors())
  const computedStateT: TEST_ROOT_SHAPE = computedState
}

function reducerDummyCustomShape() {
  const ObjA = rj({
    reducer: (r) => (state, action) => {
      return {
        infoline: 'Budda',
        numbers: ['XXX', 'YYY'],
        legal: false,
      }
    },
    effect: () => Promise.resolve(23),
  })

  const state = ObjA.reducer(undefined, { type: INIT })

  type TEST_ROOT_SHAPE = {
    infoline: string
    numbers: string[]
    legal: boolean
  }
  type TEST_SHAPE = {
    root: TEST_ROOT_SHAPE
  }

  const stateT: TEST_SHAPE = state

  const computedState = ObjA.computeState(state, ObjA.makeSelectors())
  const computedStateT: TEST_ROOT_SHAPE = computedState
}

function reducerTypedCustomShape() {
  interface ActionGang extends Action<'GANG'> {
    gang: number
  }

  function oldMyReducer(
    state: string[] | undefined = [],
    action: Action | ActionGang
  ): string[] {
    if (action.type === 'GANG') {
      // TODO: If Action will only a uniono this explict check can be avoided....
      return state.concat((action as ActionGang).gang.toFixed(2))
    }
    return state
  }

  const ObjA = rj({
    reducer: (r) => oldMyReducer,
    effect: () => Promise.resolve(23),
  })

  const state = ObjA.reducer(undefined, { type: INIT })

  type TEST_ROOT_SHAPE = string[]
  type TEST_SHAPE = {
    root: TEST_ROOT_SHAPE
  }

  const stateT: TEST_SHAPE = state

  const computedState = ObjA.computeState(state, ObjA.makeSelectors())
  const computedStateT: TEST_ROOT_SHAPE = computedState
}

function reducerExtendStateShapeWithPlugin() {
  type BASE_ROOT_TEST_SHAPE = {
    data: any
    pending: boolean
    error: any
  }

  const pluginA = rjPlugin({
    reducer: (r) => (state, action) => {
      const stateT: BASE_ROOT_TEST_SHAPE = r(state, action)

      return {
        ...r(state, action),
        mrmax: { business: true },
      }
    },
  })

  type WITH_P1_ROOT_TEST_SHAPE = {
    data: any
    pending: boolean
    error: any
    mrmax: { business: boolean }
  }

  const ObjA = rj(pluginA, {
    reducer: (r) => (state, action) => {
      const stateT: WITH_P1_ROOT_TEST_SHAPE = r(state, action)

      return {
        ...r(state, action),
        argo: 88,
      }
    },
    effect: () => Promise.resolve(23),
  })

  const state = ObjA.reducer(undefined, { type: INIT })

  type TEST_ROOT_SHAPE = {
    data: any
    pending: boolean
    error: any
    mrmax: { business: boolean }
  }

  type TEST_SHAPE = {
    root: TEST_ROOT_SHAPE
  }

  const stateT: TEST_SHAPE = state

  const computedState = ObjA.computeState(state, ObjA.makeSelectors())
  const computedStateT: TEST_ROOT_SHAPE = computedState
}

function connectRjMatchProps() {
  type TEST_PROPS = {
    data: any
    error: any
    pending: boolean
  } & BoundActionCreatorsWithBuilder<RjBaseActionCreators>

  const rjState = rj(() => Promise.resolve(1312))
  const Component: FunctionComponent<TEST_PROPS> = (props) => {
    props.run.onSuccess(() => {}).run()
    props.clean.onSuccess(() => {}).run()
    props.cancel.onSuccess(() => {}).run()
    return null
  }

  const RjComponent = connectRj(rjState)(Component)
  const jsx = <RjComponent />

  type TEST_PROPS_B = {
    data: any
    error: any
    pending: boolean
    x: number
    yy: string[]
  } & BoundActionCreatorsWithBuilder<RjBaseActionCreators>

  const ComponentB: FunctionComponent<TEST_PROPS_B> = (props) => {
    return null
  }

  const RjComponentB = connectRj(rjState)(ComponentB)
  const jsxB = <RjComponentB x={3} yy={['Hello', 'Giova']} />
}

function sideEffectConfigurations() {
  const obj = rj({
    effect: () => Promise.resolve(99),

    takeEffect: 'every',

    effectCaller: (fn, ...args) =>
      (fn(...args) as Promise<any>).then(() => 'Hello!'),

    effectPipeline: (action, state) => {
      const v = state.value
      return action.pipe(
        withLatestFrom(state),
        map(([action, state]) => {
          return action
        })
      )
    },
  })
}

function pluginPlainList() {
  const obj = rj(rjPlainList(), {
    effect: () => Promise.resolve(99),
  })
  const state = obj.reducer(undefined, { type: INIT })
  type TEST_DATA_TYPE = any[] | null
  const testData: TEST_DATA_TYPE = state.root.data
  state.root.data?.concat(88)
}

function pluginListVanillaVsBuilder() {
  const objVanilla = rj(
    rjList({
      pageSize: 10,
      pagination: nextPreviousPaginationAdapter,
    }),
    {
      selectors: (se) => ({
        // NOTE: In vanilla mode TS can't infer
        // "getPagination" i think the cause in always
        // see: https://github.com/microsoft/TypeScript/issues/41396
        gang: (s) => se.getData(s),
      }),
      effect: () => Promise.resolve(88),
    }
  )

  const objBuilder = rj()
    .plugins(
      rjList({
        pageSize: 10,
        pagination: nextPreviousPaginationAdapter,
      })
    )
    .selectors((se) => ({
      // NOTE: My FUCKING GOOD BOY BUILDER CAN INFER THE WHOLE HELL
      // After .plugins() call TS ha infered the new state and selectors
      gang: (s) => (se.getPagination(s).count ?? 0) * 2,
    }))
    .effect({
      effect: () => Promise.resolve(88),
    })

  const state = objBuilder.reducer(undefined, { type: INIT })
  objBuilder.makeSelectors().gang(state).toFixed(2)
}

function mutationsState() {
  const o1 = rj({
    mutations: {
      muta: {
        updater: (s) => s,
        reducer: () => ({
          drago: 23,
          kill: 'Humans',
        }),
        effect: () => Promise.resolve(1),
      },
    },
    effect: () => Promise.resolve(88),
  })
  const state = o1.reducer(undefined, { type: INIT })

  const o2 = rj()
    .mutations({
      muta: {
        updater: (s) => s,
        reducer: () => ({
          drago: 23,
          kill: 'Humans',
        }),
        effect: () => Promise.resolve(1),
      },
    })
    .effect(() => Promise.resolve(88))
  const state2 = o2.reducer(undefined, { type: INIT })

  type TEST_MUTATION_SHAPE = {
    drago: number
    kill: string
  }

  let stateT: TEST_MUTATION_SHAPE = state.mutations.muta
  stateT = state2.mutations.muta
}

function useRjBasicTypes() {
  const obj = rj({
    effect: () => Promise.resolve(3)
  })

  const [{ pending }, { run }] = useRj(obj)
  const flag: boolean = pending
}

function useRjBasicTypesEdge() {
  const obj = rj({
    effect: () => Promise.resolve(3)
  })

  const [{ pending }, { run }] = useRj(obj, undefined)
  const flag: boolean = pending
}

function useRjBasicTypesWithSelectState() {
  const obj = rj({
    effect: () => Promise.resolve(3)
  })

  const [{ flag, pizzaDay }, { run }] = useRj(obj, (state) => {
    return {
      flag: state.root.pending,
      pizzaDay: new Date()
    }
  })
  const flagU: boolean = flag
  const dayPizzaDayIs: Date = pizzaDay
}
