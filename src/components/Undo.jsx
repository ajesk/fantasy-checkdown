import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button, Glyphicon } from 'react-bootstrap'
import { undoPick } from '../actions'

const Undo = ({dispatch, playersPicked}) => {
	return true ? (
	<Button bsStyle="warning" onClick={() => dispatch(undoPick())}>
		<Glyphicon glyph="step-backward" />
		Undo
	</Button>
	) :
	null;
}

Undo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  playersPicked: PropTypes.bool.isRequired
}

Undo.defaultProps = {
	dispatch: () => '',
	playersPicked: false
}

export default connect()(Undo);