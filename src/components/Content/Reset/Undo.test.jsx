import React from 'react';
import Undo from './Reset';
import { render, fireEvent } from '@testing-library/react'
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

it('renders with no button', () => {
  const { queryByText } = render(<Undo store={createStore(rootReducer)} players={[]} />);

  expect(queryByText("Undo")).toBeNull();
});

it('renders with button', () => {
  const store = createStore(rootReducer, { players: [{ name: "Player Name" }] });
  const { getByText } = render(<Undo store={store} />);

  expect(getByText("Undo")).toBeTruthy();
});

it('should fire undo dispatch', () => {
  let counter = 0;
  const mockDispatch = () => { counter++ }

  const store = createStore(rootReducer, { players: [{ name: "Player Name" }] });
  store.dispatch = mockDispatch;

  const { getByText } = render(<Undo store={store} />);
  fireEvent.click(getByText("Undo"))
  expect(counter).toBe(1);
});
