import { VisibilityFilters } from '../actions';

const toggle = (action, state) => {
  state[action] = 1 - (state[action] | 0);
  return state;
}

const visibilityFilters =
  (state = [VisibilityFilters.SHOW_AVAILABLE, VisibilityFilters.SHOW_PICKED], action) => {
    switch (action.type) {
      case 'TOGGLE_CONTENT':
        return toggle(action.type, state)
      case 'HIDE_ALL':
        return [];
      case 'SHOW_ALL':
        return [VisibilityFilters.SHOW_AVAILABLE, VisibilityFilters.SHOW_PICKED];
      default:
        return state
    }
  }

export default visibilityFilters;