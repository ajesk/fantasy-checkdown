import React from 'react';
import PropTypes from 'prop-types'
import { Player } from './'
import './PlayerTier.css'

const PlayerTier = ({playerTier, players, playerOnClick}) => (
    <tbody>
      <tr className="tier-header">
        <th colSpan={10}>{playerTier}</th>
      </tr>
      {
        Object.entries(players)
          .map(([rank, player]) => 
            <Player
              key={rank}
              rank={rank}
              player={player}
              onClick={() => playerOnClick(rank)}
            />)
      }
    </tbody>
);

PlayerTier.propTypes = {
  playerTier: PropTypes.string.isRequired,
  playerOnClick: PropTypes.func.isRequired,
  players: PropTypes.objectOf(
    PropTypes.object.isRequired
  ).isRequired,
}

export default PlayerTier;