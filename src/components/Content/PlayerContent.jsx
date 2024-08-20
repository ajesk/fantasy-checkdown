import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../../actions';
import PlayerTable from './AvailablePlayers/PlayerTable';
import PickedTable from './PickedPlayers/PickedTable';
import Grid from '@mui/material/Grid';
import PlayerContentToolbar from './PlayerContentToolbar';
import MyTeamModal from './MyTeam/MyTeamModal';


const mapStateToProps = (state) => state;

const PlayerContent = ({ visibilityFilters, players = [] }) => players.length ?
  (
    <Box>
      <Paper>
        <Grid container direction="row" justify="space-between">
          {visibilityFilters[VisibilityFilters.SHOW_AVAILABLE] &&
            <Grid item xs sx={{ margin: `0.5em` }}>
              <PlayerContentToolbar />
              <PlayerTable />
            </Grid>}
          {visibilityFilters[VisibilityFilters.SHOW_PICKED] &&
            <Grid item xs sx={{ margin: `0.5em` }}>
              <PickedTable />
            </Grid>}
        </Grid>
      </Paper>
      <MyTeamModal show={visibilityFilters[VisibilityFilters.SHOW_MY_TEAM]} players={players} />
    </Box>
  ) :
  '';

export default connect(mapStateToProps)(PlayerContent);