export const dataFetchSuccess = (tvShows) => ({
  type: 'FETCH_DATA_SUCCESS',
  tvShows
})

export const isLoading = (check) => ({
  type: 'IS_LOADING',
  check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  check
})

export const tvShowFetchSuccess = (show) => ({
  type: 'SHOW_FETCH_SUCCESS',
  show
})

export const removeShow = () => ({
  type: 'REMOVE_SHOW'
})