import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { PlayerTiers } from '.';
import './PlayerTable.css';

const PlayerTable = ({ playerData, pickPlayer }) => {
  return (
  playerData.length !== 0 ?
    <Table bordered>
      <thead>
        <tr>
          <th></th>
          <th>Rank</th>
          <th>Name</th>
          <th>Position</th>
          <th>ADP</th>
        </tr>
      </thead>
      {<PlayerTiers players={playerData.filter(p => !p.picked)} playerOnClick={pickPlayer} />}
    </Table> :
    ''
)};

PlayerTable.propTypes = {
  pickPlayer: PropTypes.func.isRequired,
  playerData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

PlayerTable.defaultProps = {
  pickPlayer: () => '',
  playerData: []
}

export default PlayerTable;