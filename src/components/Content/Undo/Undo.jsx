import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { undoPick } from '../../../actions';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import { orange } from '@material-ui/core/colors';

const mapStateToProps = (state) => state;

const Undo = ({ dispatch, players = [] }) => players.find(x => typeof x.picked !== 'undefined') ? (
  <Button
    variant="contained"
    style={{ color: orange[500] }}
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