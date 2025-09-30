import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NextIn News app', () => {
  render(<App />);
  const headerElement = screen.getByText(/ENGLISH/i);
  expect(headerElement).toBeInTheDocument();
});
