import { dataFetchSuccess, isLoading, hasErrored, tvShowFetchSuccess, removeShow, addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from './index.js'

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

  describe('addToTracked', () => {
    it('should return an object with a type of ADD_TO_TRACKED and an episode', () => {
      const episode = {
        title: 'Cake Boss'
      }
      const expected = {
        type: 'ADD_TO_TRACKED',
        episode
      }

      const result = addToTracked(episode)

      expect(result).toEqual(expected)
    })
  })

  describe('removeFromTracked', () => {
    it('should return an object with a type of REMOVE_FROM_TRACKED and an episode', () => {
      const episode = {
        title: 'Cake Boss'
      }
      const expected = {
        type: 'REMOVE_FROM_TRACKED',
        episode
      }

      const result = removeFromTracked(episode)

      expect(result).toEqual(expected)
    })
  })

  describe('toggleFavorite', () => {
    it('should return an object with a type of TOGGLE_FAVORITE and an episode', () => {
      const episode = {
        title: 'Cake Boss'
      }
      const expected = {
        type: 'TOGGLE_FAVORITE',
        episode
      }

      const result = toggleFavorite(episode)

      expect(result).toEqual(expected)
    })
  })

  describe('toggleWatched', () => {
    it('should return an object with a type of TOGGLE_WATCHED and an episode', () => {
      const episode = {
        title: 'Cake Boss'
      }
      const expected = {
        type: 'TOGGLE_WATCHED',
        episode
      }

      const result = toggleWatched(episode)

      expect(result).toEqual(expected)
    })
  })
})