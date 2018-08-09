import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import './Player.css'


const Player = ({player, rank, onClick, dispatch}) => (
  
  <tr key={player.rank} className={player.pos}>
    <td className="center" onClick={() => dispatch(onClick(rank))}>
      <Glyphicon glyph="ok" />
    </td>
    <td className="center">{rank}</td>
    <td>{player.name}</td>
    <td className="center">{player.pos.toUpperCase()}</td>
    <td className="center">{player.posRank}</td>
    <td className="center">{player.adp}</td>
  </tr>
)

Player.propTypes = {
  onClick: PropTypes.func.isRequired,
  rank: PropTypes.any.isRequired,
  player: PropTypes.object.isRequired,
}

export default connect()(Player);