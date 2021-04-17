import React from 'react';
import PropTypes from 'prop-types'
import Player from './Player'
import './PlayerTier.css'

const PlayerTier = ({ playerTier, players }) => (
  <tbody>
    <tr className="tier-header">
      <th colSpan={10}>{playerTier}</th>
    </tr>
    {
      players.map((player) =>
          <Player
            key={player.rank}
            player={player}
          />)
    }
  </tbody>
);

PlayerTier.propTypes = {
  playerTier: PropTypes.string.isRequired,
  playerOnClick: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
}

export default PlayerTier;