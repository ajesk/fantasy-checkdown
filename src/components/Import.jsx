import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { importPlayers } from '../actions';
import { parseFpCsv } from '../util';

class Import extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTAChange = this.handleTAChange.bind(this);

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

  render() {
    return (
      <Form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Paste Tier Rankings</ControlLabel>
          <FormControl onChange={this.handleTAChange} componentClass="textarea" placeholder="tier rankings..." />
        </FormGroup>
        <Button onClick={this.handleSubmit} type="button">Import</Button>
      </Form>
    );
  }
}

export default connect()(Import);