import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { importPlayers } from '../actions';
import { parseFpCsv, importCsvData } from '../util';
import CSVReader from 'react-csv-reader';
import './Import.scss'

class Import extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTAChange = this.handleTAChange.bind(this);
    this.handleCsvImport = this.handleCsvImport.bind(this);

    this.state = {
      rawData: ''
    };
  }

  

  handleTAChange(e) {    
    this.setState({ rawData: e.target.value });
  }
  
  handleSubmit() {
    const { dispatch } = this.props;
    
    dispatch(importPlayers(parseFpCsv(this.state.rawData)));
  }
  
  handleCsvImport(csv) {
    const { dispatch } = this.props;

    dispatch(importPlayers(importCsvData(csv)));
  }

  render() {
    return (
      <div className="import-control">
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Paste Tier Rankings</ControlLabel>
          <FormControl onChange={this.handleTAChange} componentClass="textarea" placeholder="tier rankings..." />
        </FormGroup>
        <CSVReader
          cssClass="csv-reader-input"
          label="Import FP CSV Rankings"
          onFileLoaded={this.handleCsvImport}
          onError={this.handleDarkSideForce}
          inputId="fp-rankings"
          inputStyle={{color: 'red'}}
        />
        <div className="import-button" onClick={this.handleSubmit}>Import</div>
      </div>
    );
  }
}

export default connect()(Import);