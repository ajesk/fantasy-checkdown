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
import { Grid } from '@mui/material';

const getRanks = (player) => {
  const ranks = [];
  Object.keys(player)
    .filter(key => key.startsWith('rk'))
    .forEach(key => ranks.push({ key: key.replace('rk', ''), rank: player[key] }))

  return ranks;
}

const Player = ({ player }) => {
  const ranks = getRanks(player)

  if (ranks.length == 1) return player.rk

  return <Grid sx={{padding: '0.25em'}}>
    {ranks.map(rank => <Grid key={rank.key} container justifyContent={'space-between'}>
      <Grid item flexGrow={0}>
        {`${rank.key || 'FP'}`}
      </Grid>
      |
      <Grid item flexGrow={0}>
        {`${rank.rank}`}
      </Grid>
    </Grid>
    )}
  </Grid>
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
}

export default connect()(Player);