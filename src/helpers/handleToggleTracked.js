import { addToTracked, removeFromTracked, toggleFavorite, toggleWatched, toggleWatchList } from '../actions/index.js'

export const handleTrackedEpisode = (e, episode, tracked) => {
  return (dispatch) => {
    const matchedEpisode = tracked.find(currentEpisode => {
      return episode.url === currentEpisode.url
    })
    if(matchedEpisode === undefined) {
      dispatch(addToTracked(episode))
      dispatch(handleToggleTracked(e, episode, tracked))
    } else {
      dispatch(handleToggleTracked(e, episode, tracked))
    }
  }
}

export const handleToggleTracked = (e, episode, tracked) => {
  const target = e.target.value
  return (dispatch) => {
    if (target === 'favorite') {
      dispatch(toggleFavorite(episode))
    } else if (target === 'watched') {
      dispatch(toggleWatched(episode))
    } else if (target === 'watchlist') {
      dispatch(toggleWatchList(episode))
    }
    dispatch(handleRemoveTracked(episode))
  }
}

export const handleRemoveTracked = (episode) => {
  return (dispatch) => {
    const { favorites, watchlist, watched } = episode.tracked
    if (favorites === false && watchlist === false && watched === false) {
      dispatch(removeFromTracked(episode))
    }
  }
}

export const toggleTracked = (state, action, key) => {
  const toggledEpisode = state.map(episode => {
    if(episode.url === action.episode.url) {
      episode.tracked[key] = !episode.tracked[key]
    }
    return episode
  })
  return toggledEpisode
}