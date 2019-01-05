import { tvShowsReducer } from './tvShowsReducer.js'
import { mockCleanCakeShows } from '../mockCleanData.js'

describe('tvShowsReducer', () => {
  it('should return an array of tvShows', () => {
    const mockState = []
    const mockAction = {
      type: 'FETCH_DATA_SUCCESS',
      tvShows: mockCleanCakeShows
    }
    const expected = mockCleanCakeShows

    const result = tvShowsReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a default state', () => {
    const expected = []

    const result = tvShowsReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})