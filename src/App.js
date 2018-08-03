import React, { Component } from 'react';
import logo from './checklist.svg';
import './App.css';
import PlayerContainer from './containers/PlayerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Checkdown</h1>
        </header>
        <PlayerContainer />
      </div>
    );
  }
}

export default App;
