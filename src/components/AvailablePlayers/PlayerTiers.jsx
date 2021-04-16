import React from 'react';
import PropTypes from 'prop-types';
import PlayerTier from './PlayerTier';
import { pickPlayer} from '../../actions'
import './PlayerTiers.css';

const PlayerTiers = ({ players }) => {
  return players.map((p) => p.tier)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort((a, b) => a.tier > b.tier)
    .map((tier) =>
      <PlayerTier
        key={tier}
        players={players.filter((p) => p.tier === tier)}
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