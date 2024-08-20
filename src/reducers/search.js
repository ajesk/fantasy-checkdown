const search =
  (state = '', action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH':
        return action.value
      case 'CLEAR_SEARCH':
        return '';
      default:
        return state
    }
  }

export default search;