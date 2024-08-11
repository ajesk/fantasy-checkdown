import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [showDrawer, setDrawer] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'center', alignContent: 'center' }}>
          <Box flexGrow={1}>
            <Typography variant="h3" component="h1" sx={{
              flexGrow: 1,
            }}>
              Fantasy Checkdown Chart
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit" aria-label="show menu" onClick={() => setDrawer(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={showDrawer} onClose={() => setDrawer(false)}>
        <Box sx={{
          width: useTheme().spacing(50),
          margin: useTheme().spacing(2)
        }}>
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
            <li>Get FP draft rankings CSV from <a href="https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php">here</a></li>
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