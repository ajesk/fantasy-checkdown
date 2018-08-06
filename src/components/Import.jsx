import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { importPlayers } from '../actions'

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

const Import = ({dispatch}) => {
  return (
  <Button onClick={() => dispatch(importPlayers(data))}>
    Import
  </Button>
)}

Import.propTypes = {
  
}

export default connect()(Import);