import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './PlayerTable.scss';
import PlayerTiers from './PlayerTiers';

const mapStateToProps = (state) => {
  return ({
    playerData: state.players,
  })
};

const PlayerTable = ({ playerData }) => {
  return (
    playerData.length !== 0 ?
      <div className="player-tables">
        <div className="player-table">
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
            {<PlayerTiers players={playerData.filter(p => !p.picked)} />}
          </Table>
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

export default connect(
  mapStateToProps
)(PlayerTable);