import { VisibilityFilters } from '../actions';

const toggle = (action, state) => {
  const newFilter = {};
  newFilter[action] = !state[action]
  return { ...state, ...newFilter };
}

const set = (action, value, state) => {
  const newFilter = {};
  newFilter[action] = value;
  return {...state, ...newFilter};
}

const visibilityFilters =
  (state = { SHOW_AVAILABLE: true, SHOW_PICKED: true, SHOW_MY_TEAM: false }, action) => {
    switch (action.type) {
      case 'TOGGLE_CONTENT':
        return toggle(action.filter, state)
      case 'HIDE_ALL':
        return [];
      case 'SHOW_ALL':
        return [VisibilityFilters.SHOW_AVAILABLE, VisibilityFilters.SHOW_PICKED];
      case 'SHOW_MY_TEAM':
        return set(action.filter, action.value, state);
      default:
        return state
    }
  }

export default visibilityFilters;