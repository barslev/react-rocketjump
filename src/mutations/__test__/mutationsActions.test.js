import rj from '../../rj'
import useRj from '../../useRj'
import { isEffectAction } from '../../actionCreators'
import { renderHook, act } from '@testing-library/react-hooks'

const MUTATION_PREFIX = '@MUTATION'

describe('RJ mutations action creators', () => {
  it('should be generated from mutations and generate good actions', async () => {
    const actionLog = []

    const maRjState = rj({
      mutations: {
        killHumans: {
          effect: () => Promise.resolve(23),
          updater: () => {},
        },
        cookSpaghetti: {
          effect: () => Promise.resolve(23),
          updater: () => {},
        },
      },
      reducer: r => (state, action) => {
        actionLog.push(action)
        return r(state, action)
      },
      effect: () => Promise.resolve(1312),
    })

    const { result } = renderHook(() => useRj(maRjState))

    let action
    let type

    await act(async () => {
      result.current[1].killHumans('Giova', 23)
    })

    type = `${MUTATION_PREFIX}/killHumans/RUN`
    action = actionLog.filter(a => a.type === type)[0]
    expect(action).toEqual({
      type,
      payload: {
        params: ['Giova', 23],
      },
      meta: {
        params: ['Giova', 23],
      },
      callbacks: {
        onSuccess: undefined,
        onFailure: undefined,
      },
    })
    expect(isEffectAction(action)).toBe(true)

    await act(async () => {
      result.current[1].cookSpaghetti({ k: 23 })
    })
    type = `${MUTATION_PREFIX}/cookSpaghetti/RUN`
    action = actionLog.filter(a => a.type === type)[0]
    expect(action).toEqual({
      type,
      payload: {
        params: [{ k: 23 }],
      },
      meta: {
        params: [{ k: 23 }],
      },
      callbacks: {
        onSuccess: undefined,
        onFailure: undefined,
      },
    })
    expect(isEffectAction(action)).toBe(true)
  })
})
