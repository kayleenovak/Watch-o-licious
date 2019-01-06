import { showInfoReducer } from './showInfoReducer.js'

describe('showInfoReducer', () => {
  let mockState

  beforeEach(() => {
    mockState = []
  })
  it('should return shows if the case is SHOW_FETCH_SUCCESS', () => {
    const mockAction = {
      type: 'SHOW_FETCH_SUCCESS',
      show: [{season: 1, episodes: []}]
    }
    const expected = [{season: 1, episodes: []}]

    const result = showInfoReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return shows if the case is REMOVE_SHOW', () => {
    const mockAction = {
      type: 'REMOVE_SHOW'
    }
    const expected = []

    const result = showInfoReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if the state is undefined and the action is an empty object', () => {
    const mockAction = {}
    const expected = []

    const result = showInfoReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})