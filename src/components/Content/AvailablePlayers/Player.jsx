import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CancelIcon from '@material-ui/icons/CancelTwoTone';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';
import { draftPlayer, pickPlayer } from '../../../actions';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
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
});

function getPosClass(pos) {
  return pos.replace(/[0-9]/g, '').toLowerCase();
}

const Player = ({ player, dispatch }) => {
  const classes = useStyles();

  return <TableRow key={player.rk} className={`${classes.player} ${classes[getPosClass(player.pos)]}`}>
    <TableCell padding="none" align="center">
      <IconButton aria-label={`select ${player.playerName}`} onClick={() => dispatch(draftPlayer(player.rk))}>
        <CheckCircleTwoToneIcon fontSize="large" style={{ color: green[1000] }} />
      </IconButton>
      <IconButton aria-label={`select ${player.playerName}`} onClick={() => dispatch(pickPlayer(player.rk))}>
        <CancelIcon fontSize="large" color="secondary" />
      </IconButton>
    </TableCell>
    <TableCell className={classes.playerData} align="center">{player.rk}</TableCell>
    <TableCell className={classes.playerData}>{player.playerName}</TableCell>
    <TableCell className={classes.playerData} align="center">{player.pos}</TableCell>
    <TableCell className={classes.playerData} align="center">{player.avg}</TableCell>
  </TableRow>
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
}

export default connect()(Player);