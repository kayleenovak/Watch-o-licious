export const tvShowsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.tvShows
    default:
      return state
  }
}