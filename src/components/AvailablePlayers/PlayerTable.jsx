import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { connect } from 'react-redux';
import PlayerTiers from './PlayerTiers';

const mapStateToProps = (state) => {
  return ({
    availablePlayers: state.players.filter(p => !p.picked),
  })
};

const PlayerTable = ({ availablePlayers }) => {
  return (
    availablePlayers.length !== 0 ?
      <div className="player-tables">
        <div className="player-table">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Rank</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Position</TableCell>
                <TableCell align="center">ADP</TableCell>
              </TableRow>
            </TableHead>
            <PlayerTiers players={availablePlayers} />
          </Table>
        </div>
      </div>
      :
      ''
  )
};

PlayerTable.propTypes = {
  pickPlayer: PropTypes.func.isRequired,
  playerData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

PlayerTable.defaultProps = {
  pickPlayer: () => '',
  playerData: []
}

export default connect(
  mapStateToProps
)(PlayerTable);