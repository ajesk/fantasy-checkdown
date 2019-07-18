import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import { undoPick } from '../actions';
import './Undo.scss';

const Undo = ({ dispatch }) => {
  return (
    <div className="undo-button" onClick={() => dispatch(undoPick())}>
      <Glyphicon glyph="step-backward" />
      Undo
	</div>
  );
}

Undo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

Undo.defaultProps = {
  dispatch: () => '',
  playersPicked: false
}

export default connect()(Undo);