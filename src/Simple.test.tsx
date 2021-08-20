import React from 'react';
import { render, screen } from '@testing-library/react';
import Simple from './Simple';

test('renders learn react link', () => {
  render(<Simple />);
  const linkElement = screen.getByText(/Hello/i);
  console.log(linkElement)
  expect(linkElement).toHaveStyle('color:blue')
  expect(linkElement).toBeInTheDocument();
});
