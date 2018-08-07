import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { PlayerTier } from '.';

const PlayerTable = ({playerData, pickPlayer}) => (
    !(Object.keys(playerData).length === 0 && playerData.constructor === Object) ?
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>rank</th>
            <th>name</th>
            <th>position</th>
            <th>position rank</th>
            <th>adp</th>
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
  pickPlayer: PropTypes.func.isRequired,
  playerData: PropTypes.object.isRequired,
}

PlayerTable.defaultProps = {
  pickPlayer: () => '',
  playerData: {}
}

export default PlayerTable;