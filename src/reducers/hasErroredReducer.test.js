import { hasErroredReducer } from './hasErroredReducer.js'

describe('hasErroredReducer', () => {
  let mockState

  beforeEach(() => {
    mockState = false
  })
  it('should return the action.check if the type is HAS_ERRORED', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      check: true
    }
    const expected = true

    const result = hasErroredReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a defualt state if the action is undefined', () => {
    const result = hasErroredReducer(undefined, {})

    expect(result).toEqual(false)
  })
})