import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Player.css'


const PickedPlayer = ({player, pickedIndex}) => (
  
  <tr key={pickedIndex} className={player.pos}>
    <td className="center">{pickedIndex + 1}</td>
    <td>{player.name}</td>
  </tr>
)

PickedPlayer.propTypes = {
  player: PropTypes.object.isRequired,
}

export default connect()(PickedPlayer);