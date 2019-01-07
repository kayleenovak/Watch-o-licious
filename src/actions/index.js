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

export const addFavorite = (episode) => ({
  type: 'ADD_FAVORITE',
  episode
})

export const removeFavorite = (episode) => ({
  type: 'REMOVE_FAVORITE',
  episode
})

export const addWatched = (episode) => ({
  type: 'ADD_WATCHED',
  episode
})

export const removeWatched = (episode) => ({
  type: 'REMOVE_WATCHED',
  episode
})

export const addWatchList = (episode) => ({
  type: 'ADD_WATCH_LIST',
  episode
})

export const removeWatchList = (episode) => ({
  type: 'REMOVE_WATCH_LIST'.
  episode
})