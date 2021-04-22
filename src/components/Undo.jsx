import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { undoPick } from '../actions';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';

const mapStateToProps = (state) => state;

const Undo = ({ dispatch, players }) => {
  console.log(players)

  return players.length !== 0 && (
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
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Undo);