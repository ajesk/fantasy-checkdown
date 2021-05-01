import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  playerData: {
    fontSize: '1.5rem',
    padding: '1px 24px 1px 16px'
  },
  tableHead: {
    fontSize: '1.5rem',
    'font-weight': 'bold',
    padding: '1px 24px 1px 16px'
  }
});

const PickedTable = ({ pickedPlayers }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} outlined="true">
      <Table size="small">
        <TableHead>
          <TableRow>
            {
              ["Pick #", "Tier", "Name", "Position"].map(column =>
                <TableCell key={column} className={classes.tableHead}>{column}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pickedPlayers.sort((a, b) => b.picked - a.picked)
              .map((player) =>
                <TableRow key={player.picked}>
                  {[player.picked, player.tiers, player.playerName, player.pos.replace(/[0-9]/g, '')]
                    .map((columnData, i) =>
                      <TableCell key={i} className={classes.playerData}>{columnData}</TableCell>
                    )
                  }
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </Paper>
  )
};

PickedTable.propTypes = {
  pickedPlayers: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return ({
    pickedPlayers: state.players.filter(p => p.picked),
  })
};

export default connect(
  mapStateToProps
)(PickedTable);