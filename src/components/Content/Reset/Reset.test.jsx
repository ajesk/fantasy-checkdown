import React from 'react';
import Reset from './Reset';
import { render, fireEvent } from '@testing-library/react'
import { createStore } from 'redux';
import rootReducer from '../../../reducers';

it('renders with no button', () => {
  const { queryByText } = render(<Reset store={createStore(rootReducer)} players={[]} />);

  expect(queryByText("Reset")).toBeNull();
});

it('renders with button', () => {
  const store = createStore(rootReducer, { players: [{ name: "Player Name" }] });
  const { getByText } = render(<Reset store={store} />);

  expect(getByText("Reset")).toBeTruthy();
});

it('should fire undo dispatch', () => {
  let counter = 0;
  const mockDispatch = () => { counter++ }

  const store = createStore(rootReducer, { players: [{ name: "Player Name" }] });
  store.dispatch = mockDispatch;

  const { getByText } = render(<Reset store={store} />);
  fireEvent.click(getByText("Reset"))
  expect(counter).toBe(1);
});
