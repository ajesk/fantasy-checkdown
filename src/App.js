import React from 'react';
import Import from './components/Import/Import';
import Header from './components/Header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlayerContent from './components/Content/PlayerContent';
import { useTheme } from '@mui/material';

const App = () => (
  <Box sx={{
    width: '100%', height: '100%'
  }}>
    <Header />
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      sx={{ padding: useTheme().spacing(1) }}
    >
      <PlayerContent />
      <Import />
    </Grid>
  </Box>
)

export default App;
