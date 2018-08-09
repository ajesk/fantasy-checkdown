import React, { Component } from 'react';
import { Col, Row, Navbar, NavbarBrand } from 'react-bootstrap';
import logo from './checklist.svg';
import './App.css';
import PlayerContainer from './containers/PlayerContainer';
import {Import, Undo} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse className="App-header">
          <NavbarBrand className="nav-brand">
            <img src={logo} className="app-logo" alt="logo" />
          </NavbarBrand>
          <p className="nav-text">Fantasy Checkdown</p>
        </Navbar>
        <Row className="table-row">
          <Col xs={10} xsOffset={1}>
            <Undo />
            <PlayerContainer />
          </Col>
        </Row>
        <Row className="function-row">
          <Col xs={10} xsOffset={1}>
            <Import />
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
