import { isLoadingReducer } from './isLoadingReducer.js'

describe('isLoadingReducer', () => {
  it('should return the action.type', () => {
    const mockState = false
    const mockAction = {
      type: 'IS_LOADING',
      check: true
    }
    const expected = true

    const result = isLoadingReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a default state of false', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})