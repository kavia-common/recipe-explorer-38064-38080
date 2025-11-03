import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// PUBLIC_INTERFACE
// Ensures the landing text is present to validate mount without causing
// CRA template expectation mismatch (removes "learn react" dependency).
test('renders landing text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const el = screen.getByText(/Recipe Explorer frontend is running/i);
  expect(el).toBeInTheDocument();
});
