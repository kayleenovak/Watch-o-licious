import { toggleTracked } from '../helpers/handleToggleTracked.js'

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
      return toggleTracked(state, action, 'favorites')
    case 'TOGGLE_WATCHED':
      return toggleTracked(state, action, 'watched')
    case 'TOGGLE_WATCH_LIST':
      return toggleTracked(state, action, 'watchlist')
    default:
      return state
  }
}
