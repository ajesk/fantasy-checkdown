import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: theme.spacing(40),
    margin: theme.spacing(2)
  }
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
        <Box className={classes.drawer}>
          <Typography variant="h3">Tier based drafting?..</Typography>
          <Typography paragraph variant="inherit">
            Tier based drafting is a practice used in fantasy sport leagues to draft the best balanced team possible.
            Simply put players are grouped into tiers. In each tier, the players are expected to perform at about the level
            as the other players in their respective positions within the same tier. Most of the time players in a highest tier
            will be picked before players of a lower tier are. There are times though that other drafters may not have the same
            knowledge and will oft pick players in lower tiers. That is where the value of tier drafting is generated.
          </Typography>
          <Typography paragraph variant="inherit">There are a few rules that should be followed when drafting in order of importance:</Typography>
          <ol>
            <li>Always attempt to take a player in the highest tier possible</li>
            <li>If you have a choice between multiple players in the highest tier, take one from the position with the least options</li>
            <li>Singleton position players should be prioritized more by preference than tier (e.g. don't feel obligated to take the lone QB early)</li>
            <li>Tier drafting falls apart after a number of rounds (7-8)</li>
            <li>Know when to break the rules, practice ahead of time to understand the flow of drafting</li>
          </ol>
          <Typography variant="h3">How to use</Typography>
            <ol>
              <li>Get FP draft rankings CSV</li>
              <li>Copy the text to the text box or upload the CSV directly</li>
              <li>Click Import</li>
              <li>Players will be listed out based upon tiers from the platform</li>
              <li>Eliminate players as they are picked in the draft to get a good picture of who to draft</li>
            </ol>
        </Box>
      </Drawer >
    </>
  )
}

export default Header;