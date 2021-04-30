import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, toggleContent } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import PlayerTable from './AvailablePlayers/PlayerTable';
import Undo from './Undo/Undo'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const mapStateToProps = (state) => state;

const useStyles = makeStyles((theme) => ({
  tablePlaceMat: {
    // padding: theme.spacing(1)
  }
}));

const PlayerContent = ({ dispatch, visibilityFilters, players = [] }) => {
  const classes = useStyles();

  return players.length ?
    (
      <Box>
        <Paper className={classes.tablePlaceMat}>
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
          <Undo />
          {visibilityFilters[VisibilityFilters.SHOW_AVAILABLE] && <PlayerTable />}
          {visibilityFilters[VisibilityFilters.SHOW_PICKED] && 'YOLO'}
        </Paper>
      </Box>
    ) :
    '';
};


export default connect(mapStateToProps)(PlayerContent);