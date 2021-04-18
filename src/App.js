import React from 'react';
import PlayerContainer from './containers/PlayerContainer';
import Import from './components/Import/Import';
import { Undo } from './components';
import './App.scss';
import Header from './components/Header/Header';

const App = ({ store }) => (
  <div className="App">
    <Header />
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
