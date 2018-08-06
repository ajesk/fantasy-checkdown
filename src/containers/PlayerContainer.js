import { connect } from 'react-redux';
import { VisibilityFilters, pickPlayer } from '../actions';
import { PlayerTable } from '../components';

const getAvailablePlayers = (players = {}, selected = {}, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_AVAILABLE:
      return players
    case VisibilityFilters.SHOW_SELECTED:
      return selected
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = state => {
  return ({
  playerData: getAvailablePlayers(state.players, state.selected, state.visibilityFilter),
})};

const mapDispatchToProps = dispatch => ({
  pickPlayer: id => dispatch(pickPlayer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTable);