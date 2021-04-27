import React from 'react';
import PlayerTier from './PlayerTier';
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../reducers';

it('renders without crashing', () => {
  const players = [{
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }];

  render(
    <Provider store={createStore(rootReducer)}>
      <PlayerTier tier={12} players={players} />
    </Provider>
  );
});
it('should render 2 players', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  };

  render(
    <Provider store={createStore(rootReducer)}>
      <PlayerTier tier={12} players={[player, player]} />
    </Provider>
  );
});
