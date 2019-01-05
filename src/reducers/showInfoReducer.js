export const showInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_FETCH_SUCCESS':
      return action.show
    case 'REMOVE_SHOW':
      return []
    default:
      return state
  }
}