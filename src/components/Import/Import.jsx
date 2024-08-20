import React, { useState } from 'react';
import { connect } from 'react-redux';
import { importPlayers } from '../../actions';
import { parseFpCsv } from '../../util/parseRankings';
import { Button, Input, ButtonBase, Grid, TextField, Typography, Divider } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SaveIcon from '@mui/icons-material/Save';

const mapStateToProps = (state) => {
  return ({
    show: state.players.length === 0
  });
};

const Import = ({ dispatch, show }) => {
  const [rawData, setData] = useState('');
  const [fileName, setFileName] = useState('');

  const handleTAChange = (e) => setData(e.target.value);
  const handleSubmit = () => dispatch(importPlayers(parseFpCsv(rawData)));
  const handleTest = (e) => {
    const [file] = e.target.files;
    setFileName(file.name);
    file.text().then(t => setData(t));
  };

  

  return show ? (
    <Grid container direction="column" alignContent="center" justify="center">
      <Grid item sx={{ padding: '1em' }}>
        <Typography variant="h2">Import FP CSV Data</Typography>
      </Grid>
      <Grid container direction="row" alignContent="center" justify="space-evenly" sx={{ padding: '1em' }}>
        <Grid container item xs={4} alignContent="center" justify="center">
          <TextField
            id="outlined-multiline-static"
            label="Paste Ranking CSV Text"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleTAChange}
            sx={{
              width: '100%'
            }}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={4} alignContent="center" justify="center">
          <ButtonBase
            component="label"
          >
            <Button variant="contained" startIcon={<SaveIcon />} component="span" sx={{
              marginRight: '1em'
            }}>
              Upload
            </Button>
            <Typography>{fileName}</Typography>
            <Input
              style={{ display: 'none' }}
              accept=".csv"
              id="contained-button-file"
              multiple
              onChange={handleTest}
              type="file" />
          </ButtonBase>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        startIcon={<ImportExportIcon />}
      >
        Import
      </Button>
    </Grid>
  ) : '';
};

export default connect(mapStateToProps)(Import);