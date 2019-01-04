import { isLoading, hasErrored, dataFetchSuccess } from '../actions/index.js'
import { tvShowsCleaner } from '../cleaners/tvShowsCleaner.js'

export const fetchTvShows = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const tvShows = await response.json()
      const cleanedTvShows = await tvShowsCleaner(tvShows)
      dispatch(dataFetchSuccess(cleanedTvShows))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}