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