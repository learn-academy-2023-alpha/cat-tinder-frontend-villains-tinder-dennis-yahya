import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders Home link', () => {
  
  render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  );
  screen.logTestingPlaygroundURL()
  const linkElements = screen.getByRole('heading', {
    name: /meet the villains!/i
  })
});