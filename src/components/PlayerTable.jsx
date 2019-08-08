import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { PlayerTiers, PickedTable } from '.';
import './PlayerTable.scss';

function playerTable(playerData, pickPlayer) {
  return <Table bordered>
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
  </Table>;
}

const PlayerTable = ({ playerData, pickPlayer }) => {
  return (
    playerData.length !== 0 ?
      <div className="player-tables">
        <div className="player-table">
          {playerTable(playerData, pickPlayer)}
        </div>
        <div className="picked-table">
          <PickedTable playerData={playerData} />
        </div>
      </div>
      :
      ''
  )
};

PlayerTable.propTypes = {
  pickPlayer: PropTypes.func.isRequired,
  playerData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

PlayerTable.defaultProps = {
  pickPlayer: () => '',
  playerData: []
}

export default PlayerTable;