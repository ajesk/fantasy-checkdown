import React from 'react';
import PlayerTable from './components/AvailablePlayers/PlayerTable';
import Import from './components/Import/Import';
import { Undo } from './components';
import Header from './components/Header/Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: theme.spacing(5)
  },
  tablePlaceMat: {
    // padding: theme.spacing(1)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Grid container direction="column" justify="center" alignContent="center" className={classes.content}>
        <Paper className={classes.tablePlaceMat}>
          <Undo />
          <PlayerTable />
        </Paper>
        <Import />
      </Grid>
    </Box>
  )
}

export default App;
