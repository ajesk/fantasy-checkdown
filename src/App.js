import React from 'react';
import logo from './checklist.svg';
import PlayerContainer from './containers/PlayerContainer';
import { Import, Undo } from './components';
import './App.scss';

const App = ({ store }) => (
  <div className="App">
    <div className="app-header">
      <div className="nav-brand">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="nav-text">Fantasy Checkdown</div>
    </div>
    <div className="table-row">
      <div className="player-pool">
        <Undo store={store} />
        <PlayerContainer store={store} />
      </div>
    </div>
    <div className="import-row">
      <div>
        <Import store={store} />
      </div>
    </div>
  </div>
)



export default App;
