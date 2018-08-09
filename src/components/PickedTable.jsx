import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { PlayerTier } from '.';
import './PlayerTable.css';

const PickedTable = ({playerData, pickPlayer}) => (
    !(Object.keys(playerData).length === 0 && playerData.constructor === Object) ?
      <Table bordered>
        <thead>
          <tr>
            <th>Pick #</th>
            <th>Name</th>
          </tr>
        </thead>
        {
          Object.entries(playerData)
            .filter(([tier, players]) => tier !== 'picked')
            .map(([tier, players]) => 
              !(Object.keys(players).length === 0 && players.constructor === Object) ?
                <PlayerTier key={tier} players={players} playerTier={tier} playerOnClick={pickPlayer} /> :
                null
            )
        }
      </Table> :
      ''
);

PlayerTable.propTypes = {
  playerData: PropTypes.array.isRequired,
}

PickedTable.defaultProps = {
  playerData: {}
}

export default PickedTable;