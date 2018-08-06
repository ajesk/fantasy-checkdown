import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


const Player = ({player, rank, onClick, dispatch}) => (
  <tr key={player.rank}>
    <td onClick={() => dispatch(onClick(rank))}>click to pick</td>
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