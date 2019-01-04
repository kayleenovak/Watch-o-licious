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

  it('isLoading should return an object with a type of IS_LOADING and a check', () => {
    const check = false
    const expected = {
      type: 'IS_LOADING',
      check
    }

    const result = isLoading(check)

    expect(result).toEqual(expected)
  })

  it('hasErrored should return an object with a type of HAS_ERRORED and a check', () => {
    const check = false
    const expected = {
      type: 'HAS_ERRORED',
      check
    }

    const result = hasErrored(check)

    expect(result).toEqual(expected)
  })
})