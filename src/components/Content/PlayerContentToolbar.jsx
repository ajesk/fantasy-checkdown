import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleContent, showTeam } from '../../actions';
import Undo from './Undo/Undo';
import Reset from './Reset/Reset';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import { Button, Paper, useTheme } from '@mui/material';

const mapStateToProps = (state) => state;

const PlayerContentToolbar = ({ dispatch, visibilityFilters }) => (
  <Paper sx={{ margin: useTheme().spacing(1) }}>
    <Grid container direction="row" justify="flex-end" sx={{ padding: useTheme().spacing(1) }}>
      <Grid container item direction="row" justify="space-between" sx={{ padding: useTheme().spacing(1) }}>
        <Grid item flexGrow={1}>
          <Undo />
        </Grid>
        <Grid item>
          <Reset />
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="space-evenly" sx={{ padding: useTheme().spacing(1) }}>
        <Grid flexGrow={1}>
          <FormControlLabel
            control={<Switch
              checked={visibilityFilters[VisibilityFilters.SHOW_AVAILABLE]}
              onChange={() => dispatch(toggleContent(VisibilityFilters.SHOW_AVAILABLE))}
              name={VisibilityFilters.SHOW_AVAILABLE}
              color="primary"
              inputProps={{ 'aria-label': 'toggle available players visibility' }} />}
            label="Available Players"
            labelPlacement="start" />
          <FormControlLabel
            control={<Switch
              checked={visibilityFilters[VisibilityFilters.SHOW_PICKED]}
              onChange={() => dispatch(toggleContent(VisibilityFilters.SHOW_PICKED))}
              name={VisibilityFilters.SHOW_PICKED}
              color="primary"
              inputProps={{ 'aria-label': 'toggle picked players visibility' }} />}
            label="Picked Players"
            labelPlacement="start" />

        </Grid>
        <Grid>
          <Button variant="contained" onClick={() => dispatch(showTeam(true))}>
            Show Team
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default connect(mapStateToProps)(PlayerContentToolbar);