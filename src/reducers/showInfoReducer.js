export const showInfoReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_FETCH_SUCCESS':
      return action.show
    default:
      return state
  }
}