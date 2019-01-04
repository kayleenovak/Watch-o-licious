export const hasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return true
    default:
      return state
  }
}