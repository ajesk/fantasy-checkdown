import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from '../../../actions';
import { Backdrop, Button, Fade, Modal, Paper, Typography, useTheme } from '@mui/material';
import { Undo } from '@mui/icons-material';

const mapStateToProps = (state) => state;

const Reset = ({ dispatch, players = [] }) => {
  const [showConfirm, setConfirm] = useState(false);

  return players.length !== 0 &&
    (
      <>
        <Button
          variant="contained"
          color="error"
          startIcon={<Undo />}
          onClick={() => setConfirm(true)}

        >
          Reset
        </Button>
        <Modal
          open={showConfirm}
          onClose={() => setConfirm(false)}
          aria-labelledby=""
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showConfirm}>
            <Paper sx={{
              padding: useTheme().spacing(2)
            }}>
              <Typography>Confirm reset?</Typography>
              <Button
                variant="contained"
                color="error"
                sx={{
                  marginRight: useTheme().spacing(0.5)
                }}
                onClick={() => dispatch(reset())}
              >
                Confirm
              </Button>
              <Button
                variant="contained"
                color="info"
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