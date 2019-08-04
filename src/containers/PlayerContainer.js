import { connect } from 'react-redux';
import { VisibilityFilters, pickPlayer } from '../actions';
import { PlayerTable } from '../components';
import PickedTable from '../components/PickedTable';

const getAvailablePlayers = (filter, playerData = [], selected = []) => {
  switch (filter) {
    case VisibilityFilters.SHOW_AVAILABLE:
      return playerData
    case VisibilityFilters.SHOW_SELECTED:
      return selected
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = (state) => {
  return ({
    playerData: getAvailablePlayers(state.visibilityFilter, state.players, state.selected),
  })
};

const mapDispatchToProps = (dispatch) => ({
  pickPlayer: (rank) => {
    return pickPlayer(rank);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerTable, PickedTable);