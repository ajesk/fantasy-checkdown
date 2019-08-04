import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import './Player.scss'

function getPosClass(pos) {
  return pos.replace(/[0-9]/g, '').toLowerCase();
}

const Player = ({ player, onClick, dispatch }) =>
  <tr key={player.rank} className={getPosClass(player.pos)}>
    <td className="center" onClick={() => dispatch(onClick(player.rank))}>
      <Glyphicon glyph="ok" />
    </td>
    <td className="center">{player.rank}</td>
    <td>{player.overall}</td>
    <td className="center">{player.pos}</td>
    <td className="center">{player.adp}</td>
  </tr>;

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
}

export default connect()(Player);