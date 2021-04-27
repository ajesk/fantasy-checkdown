import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    displayFlags: state.visibilityFilter,
  })
};

const PlayerContent = ({player, pickedIndex}) => {
  console.log(player, pickedIndex)
  (
  
  <tr key={pickedIndex} className={player.pos}>
    <td className="center">{pickedIndex + 1}</td>
    <td>{player.name}</td>
  </tr>
)}

PlayerContent.propTypes = {
  player: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(PlayerContent);