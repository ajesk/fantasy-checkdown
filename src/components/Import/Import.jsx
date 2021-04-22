import React, { useState } from 'react';
import { connect } from 'react-redux';
import { importPlayers } from '../../actions';
import { parseFpCsv } from '../../util/parseRankings';
import { Button, Input, ButtonBase, Grid, TextField, Typography, Divider } from '@material-ui/core';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    paddingBottom: '2em'
  },
  importBox: {
    paddingBottom: '2em'
  },
  fileUploadButton: {
    marginRight: '1em'
  },
  csvTextBox: {
    width: '100%'
  }
});

const Import = ({ dispatch }) => {
  const classes = useStyles();
  const [rawData, setData] = useState('');
  const [fileName, setFileName] = useState('');

  const handleTAChange = (e) => setData(e.target.value);

  const handleSubmit = () => dispatch(importPlayers(parseFpCsv(rawData)));

  const handleTest = (e) => {
    const [file] = e.target.files;
    setFileName(file.name);
    file.text().then(t => setData(t));
  };

  return (
    <Grid container direction="column" alignContent="center" justifyContent="center">
      <Grid item className={classes.header}>
        <Typography variant="h2">Import FP CSV Data</Typography>
      </Grid>
      <Grid container direction="row" alignContent="center" justify="space-evenly" className={classes.importBox}>
        <Grid container item xs={4} alignContent="center" justify="center">
          <TextField
            id="outlined-multiline-static"
            label="Paste Ranking CSV Text"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleTAChange}
            className={classes.csvTextBox}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid container item xs={4} alignContent="center" justify="center">
          <ButtonBase
            component="label"
          >
            <Button variant="contained" startIcon={<SaveIcon />} component="span" className={classes.fileUploadButton}>
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
  );
};

export default connect()(Import);