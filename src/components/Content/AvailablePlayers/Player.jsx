import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelIcon from '@mui/icons-material/CancelTwoTone';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import green from '@mui/material/colors/green';
import { draftPlayer, pickPlayer } from '../../../actions';
import PlayerRanks from './PlayerRanks';

const styles = {
  player: {
    opacity: 1,
    '-webkit-transition': 'opacity 1000ms linear',
    transition: 'opacity 1000ms linear',
  },
  playerData: {
    color: 'whitesmoke',
    fontSize: '1.5rem',
    padding: '1px 24px 1px 16px'
  },
  rb: {
    backgroundColor: '#68b609de',
    '&:hover': {
      backgroundColor: '#4F9D00'
    }
  },
  wr: {
    backgroundColor: '#2196f3de',
    '&:hover': {
      backgroundColor: '#087DDA'
    }
  },
  qb: {
    backgroundColor: '#DB2A1D',
    '&:hover': {
      backgroundColor: '#f44336de'
    }
  },
  te: {
    backgroundColor: '#E6A800',
    '&:hover': {
      backgroundColor: '#ffc106de'
    }
  },
  k: {
    backgroundColor: '#808080',
    '&:hover': {
      backgroundColor: '#676767'
    }
  },
  dst: {
    backgroundColor: '#808080',
    '&:hover': {
      backgroundColor: '#676767'
    }
  }
};

const getPosClass = (pos) => {
  return pos.replace(/[0-9]/g, '').toLowerCase();
}

const Player = ({ player, dispatch }) => <TableRow key={player.rk} sx={{ ...styles.player, ...styles[getPosClass(player.pos)] }}>
  <TableCell padding="none" align="center">
    <IconButton aria-label={`select ${player.playerName}`} onClick={() => dispatch(draftPlayer(player.rk))}>
      <CheckCircleTwoToneIcon fontSize="large" style={{ color: green[1000] }} />
    </IconButton>
    <IconButton aria-label={`select ${player.playerName}`} onClick={() => dispatch(pickPlayer(player.rk))}>
      <CancelIcon fontSize="large" color="error" />
    </IconButton>
  </TableCell>
  <TableCell sx={styles.playerData} align="center">
    <PlayerRanks player={player} />
  </TableCell>
  <TableCell sx={styles.playerData}>{player.playerName}</TableCell>
  <TableCell sx={styles.playerData} align="center">{player.pos}</TableCell>
  <TableCell sx={styles.playerData} align="center">{player.ecrVsAdp}</TableCell>
</TableRow>;

Player.propTypes = {
  player: PropTypes.object.isRequired,
}

export default connect()(Player);