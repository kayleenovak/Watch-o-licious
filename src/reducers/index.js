import { combineReducers } from 'redux'
import { hasErroredReducer } from './hasErroredReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { tvShowsReducer } from './tvShowsReducer'

export const rootReducer = combineReducers({
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
  tvShows: tvShowsReducer,
})