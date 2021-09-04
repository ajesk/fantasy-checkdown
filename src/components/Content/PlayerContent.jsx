import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import PlayerTable from './AvailablePlayers/PlayerTable';
import PickedTable from './PickedPlayers/PickedTable';
import Grid from '@material-ui/core/Grid';
import PlayerContentToolbar from './PlayerContentToolbar';
import MyTeamModal from './MyTeam/MyTeamModal';


const mapStateToProps = (state) => state;

const useStyles = makeStyles((theme) => ({
  gridItem: {
    margin: `0 ${theme.spacing(1)}px`
  }
}));

const PlayerContent = ({ visibilityFilters, players = [] }) => {
  const classes = useStyles();

  return players.length ?
    (
      <Box>
        <Paper className={classes.tablePlaceMat}>
          <PlayerContentToolbar />
          <Grid container direction="row" justify="space-between">
            {visibilityFilters[VisibilityFilters.SHOW_AVAILABLE] &&
              <Grid item xs className={classes.gridItem}>
                <PlayerTable />
              </Grid>
            }
            {
              visibilityFilters[VisibilityFilters.SHOW_PICKED] &&
              <Grid item xs className={classes.gridItem}>
                <PickedTable />
              </Grid>
            }
          </Grid>
        </Paper>
        <MyTeamModal show={visibilityFilters[VisibilityFilters.SHOW_MY_TEAM]} players={players} />
      </Box>
    ) :
    '';
};

export default connect(mapStateToProps)(PlayerContent);