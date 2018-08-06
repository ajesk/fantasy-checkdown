import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from './checklist.svg';
import './App.css';
import PlayerContainer from './containers/PlayerContainer';
import Import from './components/Import';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Checkdown</h1>
        </header>
        <Row>
          <Col xs={10} xsOffset={1}>
            <Import />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <PlayerContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
