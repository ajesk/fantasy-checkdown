import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import PlayerTiers from './PlayerTiers';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tablePaper: {
    // marginTop: theme.spacing(2)
  },
  headerCell: {
    'font-weight': 'bold',
    fontSize: '1.5rem',
  },
}));

const mapStateToProps = (state) => {
  return ({
    availablePlayers: state.players.filter(p => !p.picked),
  })
};

const PlayerTable = ({ availablePlayers }) => {
  const classes = useStyles();

  return (
    availablePlayers.length !== 0 ?
      <Paper elevation={3} outlined="true" className={classes.tablePaper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell} align="center"></TableCell>
              <TableCell className={classes.headerCell} align="center">Rank</TableCell>
              <TableCell className={classes.headerCell}>Name</TableCell>
              <TableCell className={classes.headerCell} align="center">Position</TableCell>
              <TableCell className={classes.headerCell} align="center">Value</TableCell>
            </TableRow>
          </TableHead>
          <PlayerTiers players={availablePlayers} />
        </Table>
      </Paper>
      :
      ''
  )
};

PlayerTable.propTypes = {
  availablePlayers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default connect(
  mapStateToProps
)(PlayerTable);