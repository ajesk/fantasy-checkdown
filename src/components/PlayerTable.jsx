import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { PlayerTier } from '.';

const PlayerTable = ({playerData, pickPlayer}) => (
  <Table bordered striped hover>
    <thead>
      <tr>
        <td></td>
        <td>rank</td>
        <td>name</td>
        <td>position</td>
        <td>position rank</td>
        <td>adp</td>
      </tr>
    </thead>
    {Object.entries(playerData).map(([tier, players]) => <PlayerTier key={tier} players={players} playerTier={tier} playerOnClick={pickPlayer} />)}
  </Table>
);

PlayerTable.propTypes = {
  pickPlayer: PropTypes.func.isRequired,
  playerData: PropTypes.object.isRequired,
}

export default PlayerTable;