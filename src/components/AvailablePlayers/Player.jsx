import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import './Player.scss'
import { pickPlayer } from '../../actions';

function getPosClass(pos) {
  return pos.replace(/[0-9]/g, '').toLowerCase();
}

const Player = ({ player, dispatch }) => {
  console.log(player)
  return <tr key={player.rk} className={getPosClass(player.pos)}>
    <td className="center" onClick={() => dispatch(pickPlayer(player.rk))}>
      <Glyphicon glyph="ok" />
    </td>
    <td className="center">{player.rk}</td>
    <td>{player.playerName}</td>
    <td className="center">{player.pos}</td>
    <td className="center">{player.adp}</td>
  </tr>};

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
}

export default connect()(Player);