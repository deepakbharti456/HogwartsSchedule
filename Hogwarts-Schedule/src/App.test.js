import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Teachers', () => {
  render(<App />);
  const linkElement = screen.getByText(/Professor Dumbledore/i);
  expect(linkElement).toBeInTheDocument();
});
