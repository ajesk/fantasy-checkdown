import React from 'react';
import PropTypes from 'prop-types'
import Player from './Player'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const PlayerTier = ({ playerTier, players }) => (
  <TableBody>
    <TableRow sx={{
      backgroundColor: 'black'
    }}>
      <TableCell align="center" sx={{
        color: 'white',
        fontSize: "1.5rem"
      }} colSpan={10}>Tier {playerTier}</TableCell>
    </TableRow>
    {players.map((player) => <Player
      key={player.rk}
      player={player} />)}
  </TableBody>
);

PlayerTier.propTypes = {
  playerTier: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
}

export default PlayerTier;