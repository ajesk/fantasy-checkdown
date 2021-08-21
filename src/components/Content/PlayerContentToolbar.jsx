import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleContent } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Undo from './Undo/Undo';
import Reset from './Reset/Reset';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';


const mapStateToProps = (state) => state;

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(1)
  },
  gridItem: {
    margin: `0 ${theme.spacing(1)}px`
  }
}));

const PlayerContentToolbar = ({ dispatch, visibilityFilters, players = [] }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" className={classes.grid}>
      <Undo />
      <Reset />
      <Grid item>
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
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(PlayerContentToolbar);