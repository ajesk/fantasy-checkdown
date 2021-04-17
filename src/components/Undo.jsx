import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { undoPick } from '../actions';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import './Undo.scss';

const Undo = ({ dispatch }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<UndoIcon />}
      onClick={() => dispatch(undoPick())}

    >
      Undo
    </Button>
  );
}

Undo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Undo);