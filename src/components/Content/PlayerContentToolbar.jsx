import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleContent, showTeam } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Undo from './Undo/Undo';
import Reset from './Reset/Reset';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';

const mapStateToProps = (state) => state;

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1)
  },
  gridItem: {
    margin: `0 ${theme.spacing(1)}px`
  },
  paper: {
    margin: theme.spacing(1)
  }
}));

const PlayerContentToolbar = ({ dispatch, visibilityFilters }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="flex-end" className={classes.grid}>
        <Grid container item direction="row" justify="space-between" className={classes.grid}>
          <Grid item>
            <Undo />
          </Grid>
          <Grid>
            <Reset />
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="space-evenly" className={classes.grid}>
          <FormControlLabel
            control={
              <Switch
                checked={visibilityFilters[VisibilityFilters.SHOW_AVAILABLE]}
                onChange={() => dispatch(toggleContent(VisibilityFilters.SHOW_AVAILABLE))}
                name={VisibilityFilters.SHOW_AVAILABLE}
                color="primary"
                inputProps={{ 'aria-label': 'toggle available players visibility' }}
              />
            }
            label="Available Players"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={visibilityFilters[VisibilityFilters.SHOW_PICKED]}
                onChange={() => dispatch(toggleContent(VisibilityFilters.SHOW_PICKED))}
                name={VisibilityFilters.SHOW_PICKED}
                color="primary"
                inputProps={{ 'aria-label': 'toggle picked players visibility' }}
              />
            }
            label="Picked Players"
            labelPlacement="start"
          />
          <Button variant="contained" onClick={() => dispatch(showTeam(true))}>
            Show Team
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default connect(mapStateToProps)(PlayerContentToolbar);