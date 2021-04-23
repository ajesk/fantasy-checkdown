import React from 'react';
import Header from './Header';
import { render, fireEvent } from '@testing-library/react'

it('should have drawer closed on load', () => {
  const { queryByText } = render(<Header />);

  expect(queryByText("Tier based drafting?..")).toBeNull();
});

it('renders with button', () => {
  const { getByText } = render(<Header />);
  
  expect(getByText("Fantasy Checkdown Chart")).toBeTruthy();
});

it('should open drawer when hamburger is clicked', () => {
  const { getByLabelText, queryByText } = render(<Header />);
  fireEvent.click(getByLabelText("show menu"))
  expect(queryByText("Tier based drafting?..")).toBeTruthy();
});
