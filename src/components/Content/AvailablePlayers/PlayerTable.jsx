import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import PlayerTiers from './PlayerTiers';

const headerCell = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

const mapStateToProps = (state) => {
  return ({
    availablePlayers: state.players.filter(p => !p.picked &&
      (!state.search || p.playerName.toLocaleUpperCase().includes(state.search.trim().toLocaleUpperCase()))),
  });
};

const PlayerTable = ({ availablePlayers }) => (
  availablePlayers.length !== 0 ?
    <Paper elevation={3} outlined="true">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCell} align="center"></TableCell>
            <TableCell sx={headerCell} align="center">Rank</TableCell>
            <TableCell sx={headerCell}>Name</TableCell>
            <TableCell sx={headerCell} align="center">Position</TableCell>
            <TableCell sx={headerCell} align="center">Value</TableCell>
          </TableRow>
        </TableHead>
        <PlayerTiers players={availablePlayers} />
      </Table>
    </Paper>
    :
    ''
);

PlayerTable.propTypes = {
  availablePlayers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default connect(
  mapStateToProps
)(PlayerTable);