import React from 'react';
import PropTypes from 'prop-types';
import PlayerTier from './PlayerTier';
import './PlayerTiers.css';

const PlayerTiers = ({ players }) => {
  return players.map((p) => p.tiers)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => a.tiers > b.tiers)
    .map((tier) =>
      <PlayerTier
        key={tier}
        players={players.filter((p) => p.tiers === tier)}
        playerTier={tier}
      />
    );
};

PlayerTiers.propTypes = {
  playerOnClick: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired
  ).isRequired,
}

export default PlayerTiers;