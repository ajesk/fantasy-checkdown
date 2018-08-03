import React, { Component } from 'react';
import { PlayerTable } from '../components';
import { Row, Col } from 'react-bootstrap';

class ResultPage extends Component {
  
  parseResults() {
    return {
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
      }
    }
  }

  render() {
    const playerData = this.parseResults();

    return (
      <Row className="result-page">
        <Col xs={10} xsOffset={1}>
          <PlayerTable playerData={playerData} playerOnClick={(id) => console.log(id)} />
        </Col>
      </Row>
    );
  }
}

export default ResultPage;