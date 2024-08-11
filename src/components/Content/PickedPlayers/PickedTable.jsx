import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { connect } from 'react-redux';

const styles = {
  withayerData: {
    fontSize: '1.5rem',
    padding: '1px 24px 1px 16px'
  },
  tableHead: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '1px 24px 1px 16px'
  },
  draftedTierBreak: {
    border: '3px solid red'
  },
  pickedTierBreak: {
    border: '3px solid green'
  },
  tableRow: {
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: "lightblue",
      "& > .MuiTableCell-root": {
        color: "black"
      }
    }
  }
};

const PickedTable = ({ pickedPlayers }) => {
  const tierBreakStyle = (drafted) => drafted ? styles.draftedTierBreak : styles.pickedTierBreak;

  return (
    <Paper elevation={3} outlined="true">
      <Table size="small">
        <TableHead>
          <TableRow>
            {
              ["Pick #", "Tier", "Name", "Position"].map(column =>
                <TableCell key={column} sx={styles.tableHead}>{column}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pickedPlayers.sort((a, b) => b.picked - a.picked)
              .map((player) =>
                <TableRow key={player.picked}
                  selected={player.drafted}
                  hover
                  sx={{ ...styles.tableRow, ...(player.tierBreak ? tierBreakStyle(player.drafted) : {})}}
                >
                  {[player.picked, player.tiers, player.playerName, player.pos.replace(/[0-9]/g, '')]
                    .map((columnData, i) =>
                      <TableCell key={i} sx={styles.playerData}>{columnData}</TableCell>
                    )
                  }
                </TableRow>
              )
          }
        </TableBody>
      </Table>
    </Paper>
  )
};

PickedTable.propTypes = {
  pickedPlayers: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return ({
    pickedPlayers: state.players.filter(p => p.picked),
  })
};

export default connect(
  mapStateToProps
)(PickedTable);