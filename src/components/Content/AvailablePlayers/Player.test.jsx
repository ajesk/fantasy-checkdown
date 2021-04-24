import React from 'react';
import Player from './Player';
import { render, fireEvent } from '@testing-library/react'
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

it('renders without crashing', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  render(<Player store={createStore(rootReducer)} player={player} />);
});
it('renders with the correct name', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  const { queryByText } = render(<Player store={createStore(rootReducer)} player={player} />);

  expect(queryByText(player.playerName)).toBeTruthy();
});
it('renders with the correct rk', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  const { queryByText } = render(<Player store={createStore(rootReducer)} player={player} />);

  expect(queryByText(player.rk)).toBeTruthy();
});
it('renders with the correct position', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  const { queryByText } = render(<Player store={createStore(rootReducer)} player={player} />);

  expect(queryByText(player.pos)).toBeTruthy();
});
it('renders with the correct avg', () => {
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  const { queryByText } = render(<Player store={createStore(rootReducer)} player={player} />);

  expect(queryByText(player.avg)).toBeTruthy();
});
it('dispatches the correct call', () => {
  const expectedResult = {
    type: "PICK_PLAYER",
    rank: 2
  }

  const dispatchMock = (dispatchMessage) => expect(dispatchMessage)
    .toStrictEqual(expectedResult);
  const player = {
    rk: 2,
    pos: 'RB4',
    playerName: 'Aaron Boatsman',
    avg: 42
  }
  const store = createStore(rootReducer);
  store.dispatch = dispatchMock
  const { getByLabelText } = render(<Player store={store} player={player} />);
  fireEvent.click(getByLabelText("select Aaron Boatsman"));
});
