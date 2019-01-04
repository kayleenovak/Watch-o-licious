import { isLoading, hasErrored, dataFetchSuccess } from '../actions/index.js'
import { tvShowsCleaner } from '../cleaners/tvShowsCleaner.js'
import { fetchCall } from './fetchCall.js'

export const fetchTvShows = (cakeUrl, bakeUrl, bakingUrl) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const cakeShows = await fetchCall(cakeUrl)
      const bakeShows = await fetchCall(bakeUrl)
      const bakingShows = await fetchCall(bakingUrl)
      dispatch(isLoading(false))
      const cleanedTvShows = await tvShowsCleaner(cakeShows, bakeShows, bakingShows)
      dispatch(dataFetchSuccess(cleanedTvShows))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}