import { dataFetchSuccess, isLoading, hasErrored } from './index.js'

describe('actions', () => {
  it('dataFetchSuccess should return an object with a type of FETCH_DATA_SUCCESS and tvShows', () => {
    const mockTvShows = [{title: 'Cake Boss'}, {title: 'Great British Baking Show'}]
    const expected = {
      type: 'FETCH_DATA_SUCCESS',
      tvShows: mockTvShows
    }

    const result = dataFetchSuccess(mockTvShows)

    expect(result).toEqual(expected)
  })
})