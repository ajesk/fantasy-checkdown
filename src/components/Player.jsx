import React from 'react';
import PropTypes from 'prop-types'

const Player = ({player, rank, onClick}) => (
  <tr key={player.rank}>
    <td onClick={onClick}>click to pick</td>
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

export default Player;