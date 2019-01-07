import { isLoading, hasErrored, tvShowFetchSuccess } from '../actions/index.js'
import { tvShowCleaner } from '../cleaners/tvShowCleaner.js'
import { fetchCall } from '../APICalls/fetchCall.js'

export const fetchTvShowInfo = (id) => {
  const tvShowUrl = 'http://api.tvmaze.com/shows/' + id + '/episodes'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const tvShow = await fetchCall(tvShowUrl)
      dispatch(isLoading(false))
      const cleanedShow = await tvShowCleaner(tvShow, id)
      dispatch(tvShowFetchSuccess(cleanedShow))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(true))
    }
  }
}