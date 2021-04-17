import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { importPlayers } from '../../actions';
import { parseFpCsv, importCsvData } from '../../util/parseRankings';
import CSVReader from 'react-csv-reader';
import './Import.scss';

const Import = ({ dispatch }) => {
  const [rawData, setData] = useState('');

  const handleTAChange = (e) => setData(e.target.value);

  const handleSubmit = () => dispatch(importPlayers(parseFpCsv(rawData)));

  const handleCsvImport = (csv) => dispatch(importPlayers(importCsvData(csv)));

  return (
    <div className="import-control">
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Paste Tier Rankings</ControlLabel>
        <FormControl onChange={handleTAChange} componentClass="textarea" placeholder="tier rankings..." />
      </FormGroup>
      <CSVReader
        cssClass="csv-reader-input"
        label="Import FP CSV Rankings"
        onFileLoaded={handleCsvImport}
        // onError={handleDarkSideForce}
        inputId="fp-rankings"
        inputStyle={{ color: 'red' }}
      />
      <div className="import-button" onClick={handleSubmit}>Import</div>
    </div>
  );
};

export default connect()(Import);