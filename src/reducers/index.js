import { combineReducers } from 'redux'
import { hasErroredReducer } from './hasErroredReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { tvShowsReducer } from './tvShowsReducer'
import { showInfoReducer } from './showInfoReducer.js'
import { trackEpisodeReducer } from './trackEpisodeReducer.js'

export const rootReducer = combineReducers({
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
  tvShows: tvShowsReducer,
  tvShowEpisodes: showInfoReducer,
  tracked: trackEpisodeReducer
})