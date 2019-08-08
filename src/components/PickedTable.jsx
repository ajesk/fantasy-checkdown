import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './PlayerTable.scss';

const PickedTable = ({ playerData }) => {
  console.log(playerData);
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Pick #</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          playerData.filter(player => player.picked).sort((a, b) => b.picked - a.picked).map((player) =>
            <tr>
              <td>{player.picked}</td>
              <td>{player.overall}</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
};

PickedTable.propTypes = {
  playerData: PropTypes.array.isRequired,
}

PickedTable.defaultProps = {
  playerData: []
}

export default PickedTable;