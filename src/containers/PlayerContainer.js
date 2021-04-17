import { connect } from 'react-redux';
import PlayerTable from '../components/AvailablePlayers/PlayerTable';

const mapStateToProps = (state) => {
  return ({
    playerData: state.players,
  })
};

export default connect(
  mapStateToProps
)(PlayerTable);