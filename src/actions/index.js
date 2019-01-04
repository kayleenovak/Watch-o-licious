export const dataFetchSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  data
})

export const isLoading = (check) => ({
  type: 'IS_LOADING',
  check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  check
})