import React from 'react';
import PropTypes from 'prop-types'
import { Player } from './'
import './PlayerTier.css'

const PlayerTier = ({ playerTier, players, playerOnClick }) => (
  <tbody>
    <tr className="tier-header">
      <th colSpan={10}>{playerTier}</th>
    </tr>
    {
      players.map((player) =>
          <Player
            key={player.rank}
            player={player}
            onClick={() => playerOnClick(player.rank)}
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