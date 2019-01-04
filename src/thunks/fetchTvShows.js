import { isLoading, hasErrored, hasErrored} from '../actions/index.js'

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
      dispatch(fetchDataSuccess(tvShows))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}