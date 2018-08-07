import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { undoPick } from '../actions'

const Undo = ({dispatch, playersPicked}) => {
	return playersPicked ? (
	<Button onClick={() => dispatch(undoPick())}>
		Undo
	</Button>
	) :
	null
}

Undo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  playersPicked: PropTypes.bool.isRequired
}

Undo.defaultProps = {
	dispatch: () => '',
	playersPicked: false
}

const mapStateToProps = state => {
	console.log(state)
	return ({playersPicked: state.picked})
}

export default connect(mapStateToProps)(Undo);