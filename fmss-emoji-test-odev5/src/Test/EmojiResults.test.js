import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Emoji List', () => {
  let items;

  beforeEach(() => {
    render(<App />);
    items = screen.getAllByText(/Click to copy emoji/i);
  });

  test('displays a list of 20 emojis', () => {
    expect(items.length).toEqual(20);
  });
});
