import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { undoPick } from '../../../actions';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { orange } from '@mui/material/colors';

const mapStateToProps = (state) => state;

const Undo = ({ dispatch, players = [] }) => players.find(x => typeof x.picked !== 'undefined') ? (
  <Button
    variant="contained"
    color='warning'
    startIcon={<UndoIcon />}
    onClick={() => dispatch(undoPick())}

  >
    Undo
  </Button>
) : '';

Undo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Undo);