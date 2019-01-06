import { dataFetchSuccess, isLoading, hasErrored, tvShowFetchSuccess, removeShow } from './index.js'

describe('actions', () => {
  describe('dataFetchSuccess', () => {
    it('should return an object with a type of FETCH_DATA_SUCCESS and tvShows', () => {
      const mockTvShows = [{title: 'Cake Boss'}, {title: 'Great British Baking Show'}]
      const expected = {
        type: 'FETCH_DATA_SUCCESS',
        tvShows: mockTvShows
      }

      const result = dataFetchSuccess(mockTvShows)

      expect(result).toEqual(expected)
    })
  })

  describe('isLoading', () => {
    it('isLoading should return an object with a type of IS_LOADING and a check', () => {
      const check = false
      const expected = {
        type: 'IS_LOADING',
        check
      }

      const result = isLoading(check)

      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
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

  describe('tvShowFetchSuccess', () => {
    it('should return an object with a type of show_fetch_success and a show', () => {
      const show = {
        title: 'Cake Boss'
      }
      const expected = {
        type: 'SHOW_FETCH_SUCCESS',
        show
      }

      const result = tvShowFetchSuccess(show)

      expect(result).toEqual(expected)
    })
  })

  describe('removeShow', () => {
    it('should return an object with a type of REMOVE_SHOW', () => {
      const expected = {
        type: 'REMOVE_SHOW'
      }

      const result = removeShow()

      expect(result).toEqual(expected)
    })
  })
})