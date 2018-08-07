import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import './Player.css'


const Player = ({player, rank, onClick, dispatch}) => (
  <tr key={player.rank} className={player.pos}>
    <td onClick={() => dispatch(onClick(rank))}>
      <Glyphicon glyph="ok" />
    </td>
    <td>{rank}</td>
    <td>{player.name}</td>
    <td>{player.pos}</td>
    <td>{player.posRank}</td>
    <td>{player.adp}</td>
  </tr>
)

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  rank: PropTypes.any.isRequired,
  player: PropTypes.object.isRequired,
}

export default connect()(Player);