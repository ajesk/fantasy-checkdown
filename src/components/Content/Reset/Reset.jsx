import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset } from '../../../actions';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';

const mapStateToProps = (state) => state;

const Reset = ({ dispatch, players = [] }) => players.length !== 0 && (
  <Button
    variant="contained"
    color="secondary"
    startIcon={< UndoIcon />}
    onClick={() => dispatch(reset())}

  >
    Reset
  </Button >
);

Reset.propTypes = {
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Reset);