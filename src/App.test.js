import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders Home link', () => {
  
  render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  );
  const linkElements = screen.getAllByText(/Home/i);
  expect(linkElements).toHaveLength(2);
});