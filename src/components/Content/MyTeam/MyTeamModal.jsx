import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { showTeam } from '../../../actions'
import Fade from '@material-ui/core/fade';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(0.5)
  }
}));

const MyTeamModal = ({ dispatch, players, show }) => {
  const classes = useStyles();

  return (
    <Modal
      open={show}
      onClose={() => dispatch(showTeam(false))}
      aria-labelledby=""
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={show}>
        <Paper className={classes.paper}>
          <Typography>My Team</Typography>
          <Button
            variant="contained"
            color="default"
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