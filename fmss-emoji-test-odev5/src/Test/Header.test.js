import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Filter Emoji', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('filters emojis by input value', () => {
    const input = screen.getByPlaceholderText(/Emoji Search/i);
    const value = 'Yum';
    userEvent.type(input, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
