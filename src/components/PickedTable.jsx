import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './PlayerTable.css';

const PickedTable = ({playerData}) => {
  console.log(playerData);
  return (
      <Table bordered>
        <thead>
          <tr>
            <th>Pick #</th>
            <th>Name</th>
          </tr>
        </thead>
        {
          playerData.map((player) => 
            <tr>
              <td>{player.picked}</td>
              <td>{player.overall}</td>
            </tr>
          )
        }
      </Table>
)};

PickedTable.propTypes = {
  playerData: PropTypes.array.isRequired,
}

PickedTable.defaultProps = {
  playerData: []
}

export default PickedTable;