import React from 'react';
import PlayerTiers from './PlayerTiers';
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../reducers';

const players = [
  {
    tiers: 1,
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  },
  {
    tiers: 2,
    rk: 22,
    pos: 'RB52',
    playerName: 'Aaron Boatsman',
    avg: 4.32
  },
];

it('renders without crashing', () => {
  render(
    <Provider store={createStore(rootReducer)}>
      <PlayerTiers players={players} />
    </Provider>
  );
});

it('renders 2 tier entries without crashing', () => {
  const { getAllByText } = render(
    <Provider store={createStore(rootReducer)}>
      <PlayerTiers players={players} />
    </Provider>
  );

  expect(getAllByText(/Tier/).length).toBe(2);
});
