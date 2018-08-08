import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { importPlayers } from '../actions'
import { parseRankings } from '../util';

const data = {
  picked: [],
  tier0: {},
  tier1: {
    1: {
      name: 'dj',
      pos: 'rb',
      posRank: 1,
      adp: 1
    },
    2: {
      name: 'bell',
      pos: 'rb',
      posRank: 2,
      adp: 2
    },
    3: {
      name: 'gurley',
      pos: 'rb',
      posRank: 3,
      adp: 3
    }
  },
  tier2: {
    4: {
      name: 'thom',
      pos: 'wr',
      posRank: 1,
      adp: 4
    },
    5: {
      name: 'gronk',
      pos: 'te',
      posRank: 1,
      adp: 5
    },
    6: {
      name: 'rogers',
      pos: 'qb',
      posRank: 1,
      adp: 6
    }
  },
  tier3: {}
}

class Import extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: ''
    };
  }

  handleTAChange(e) {
    this.setState({rawData: e.target.value});
  }

  handleSubmit() {
    const {dispatch} = this.props;

    parseRankings(this.state.rawData);
    dispatch(importPlayers(parseRankings(this.state.rawData)))
  }

  render() {
    return (
      <Form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Paste Tier Rankings</ControlLabel>
          <FormControl onChange={this.handleTAChange.bind(this)} componentClass="textarea" placeholder="tier rankings..." />
        </FormGroup>
        <Button onClick={this.handleSubmit.bind(this)} type="button">Import</Button>
      </Form>
  )}
}

Import.propTypes = {
  
}

export default connect()(Import);