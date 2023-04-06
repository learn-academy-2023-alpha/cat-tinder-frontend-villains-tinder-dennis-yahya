import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Home link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Home/i);
  expect(linkElements).toHaveLength(2);
});