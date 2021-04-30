import { VisibilityFilters } from '../actions';

const toggle = (action, state) => {
  const newFilter = {};
  newFilter[action] = !state[action]
  return { ...state, ...newFilter };
}

const visibilityFilters =
  (state = { SHOW_AVAILABLE: true, SHOW_PICKED: true }, action) => {
    switch (action.type) {
      case 'TOGGLE_CONTENT':
        return toggle(action.filter, state)
      case 'HIDE_ALL':
        return [];
      case 'SHOW_ALL':
        return [VisibilityFilters.SHOW_AVAILABLE, VisibilityFilters.SHOW_PICKED];
      default:
        return state
    }
  }

export default visibilityFilters;