import { Fade, Modal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { showTeam } from '../../../actions';

const columns = [
  { field: 'picked', headerName: 'Picked', width: 90 },
  { field: 'tiers', headerName: 'Tier', width: 90 },
  { field: 'pos', headerName: 'Position', width: 90 },
  { field: 'playerName', headerName: 'Name', width: 150 }];

const MyTeamModal = ({ dispatch, players, show }) => {
  const myTeam = players.filter(player => player.drafted)
    .map((player, i) => {
      player.id = i;
      return player;
    });

  return (
    <Modal
      open={show}
      onClose={() => dispatch(showTeam(false))}
      aria-labelledby=""
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={show}>
        <Paper sx={{
          padding: '2em',
        }}>
          <Typography>My Team</Typography>
          <DataGrid
            rows={myTeam}
            columns={columns}
            pageSize={20}
          />
          <Button
            variant="contained"
            color="inherit"
            onClick={() => dispatch(showTeam(false))}
          >
            Close
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
};

MyTeamModal.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired
  ).isRequired,
  show: PropTypes.bool
}

export default connect()(MyTeamModal);