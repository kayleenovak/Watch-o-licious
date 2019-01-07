export const trackEpisodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_TRACKED':
      const updatedState = [...state, action.episode]
      return updatedState
    case 'REMOVE_FROM_TRACKED':
      const newState = state.filter(episode => {
        return episode !== action.episode
      })
      return newState
    case 'TOGGLE_FAVORITE':
      const toggleFavorite = state.map(episode => {
        if(episode === action.episode) {
          episode.tracked.favorite = !episode.tracked.favorite
        }
      })
      return toggleFavorite
    case 'TOGGLE_WATCHED':
      const toggleWatched = state.map(episode => {
        if(episode === action.episode) {
          episode.tracked.watched = !episode.tracked.watched
        }
      })
      return toggleWatched
    case 'TOGGLE_WATCH_LIST':
      const toggleWatchList = state.map(episode => {
        if(episode === action.episode) {
          episode.tracked.watchlist = !episode.tracked.watchlist
        }
      })
      return toggleWatchList
    default:
      return state
  }
}