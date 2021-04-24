import React from 'react';
import PlayerTable from './PlayerTable';
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
      <PlayerTable />
    </Provider>
  );
});

it('renders with header cells', () => {
  const { getByText } = render(
    <Provider store={createStore(rootReducer, {players})}>
      <PlayerTable />
    </Provider>
  );

  expect(getByText('Rank')).toBeTruthy();
});
it('renders nothing when no players are passed in', () => {
  const { queryByText } = render(
    <Provider store={createStore(rootReducer)}>
      <PlayerTable />
    </Provider>
  );

  expect(queryByText('Rank')).toBe(null);
});
