import React from 'react';
import PropTypes from 'prop-types'
import Player from './Player'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  tierHead: {
    backgroundColor: 'black'
  },
  tierNumber: {
    color: 'white',
    fontSize: "1.5rem"
  }
});

const PlayerTier = ({ playerTier, players }) => {
  const classes = useStyles();

  return (
    <TableBody>
      <TableRow className={classes.tierHead}>
        <TableCell align="center" className={classes.tierNumber} colSpan={10}>Tier {playerTier}</TableCell>
      </TableRow>
      {
        players.map((player) =>
          <Player
            key={player.rk}
            player={player}
          />)
      }
    </TableBody>
  )
};

PlayerTier.propTypes = {
  playerTier: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
}

export default PlayerTier;