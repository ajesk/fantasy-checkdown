import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [showDrawer, setDrawer] = useState(false); 

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3" component="h1" className={classes.title}>
            Fantasy Checkdown Chart
          </Typography>
          <IconButton color="inherit" aria-label="menu" onClick={() => setDrawer(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={showDrawer} onClose={() => setDrawer(false)}>
        hooplah
      </Drawer>
    </>
  )
}

export default Header;