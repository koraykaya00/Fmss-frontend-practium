import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Filter Emoji', () => {
  let input;

  beforeEach(() => {
    render(<App />);
    input = screen.getByPlaceholderText(/Emoji Search/i);
  });

  test('should filter emojis', () => {
    const value = 'Yum';
    userEvent.type(input, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
