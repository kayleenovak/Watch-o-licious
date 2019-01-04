export const hasErroredReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.check
    default:
      return state
  }
}