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

export const addToTracked = () => ({
  type: 'ADD_TO_TRACKED',
  episode
})

export const removeFromTracked = () => ({
  type: 'REMOVE_FROM_TRACKED',
  episode
})

export const toggleFavorite = (episode) => ({
  type: 'TOGGLE_FAVORITE',
  episode
})

export const toggleWatched = (episode) => ({
  type: 'TOGGLE_WATCHED',
  episode
})

export const toggleWatchList = (episode) => ({
  type: 'TOGGLE_WATCH_LIST',
  episode
})
