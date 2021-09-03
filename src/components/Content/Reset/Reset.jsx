import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from '../../../actions';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import { Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/fade';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';

const mapStateToProps = (state) => state;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing(0.5)
  }
}));

const Reset = ({ dispatch, players = [] }) => {
  const [showConfirm, setConfirm] = useState(false);
  const classes = useStyles();

  return players.length !== 0 &&
    (
      <>
        <Button
          variant="contained"
          color="secondary"
          startIcon={< UndoIcon />}
          onClick={() => setConfirm(true)}

        >
          Reset
        </Button >
        <Modal
          open={showConfirm}
          onClose={() => setConfirm(false)}
          aria-labelledby=""
          className={classes.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showConfirm}>
            <Paper className={classes.paper}>
              <Typography>Confirm reset?</Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => dispatch(reset())}
              >
                Confirm
              </Button>
              <Button
                variant="contained"
                color="default"
                onClick={() => setConfirm(false)}
              >
                Cancel
              </Button>
            </Paper>
          </Fade>
        </Modal>
      </>
    )
};

Reset.propTypes = {
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Reset);