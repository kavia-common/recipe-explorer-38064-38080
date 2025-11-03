import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import SignIn11235 from './pages/SignIn11235';

/**
 * PUBLIC_INTERFACE
 * App - Root component for Recipe Explorer frontend.
 * Provides a minimal themed landing with a theme toggle while backend integration is pending.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to the root document element for CSS variables to take effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * PUBLIC_INTERFACE
   * toggleTheme - Switch between light and dark modes.
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const Landing = () => (
    <header className="App-header">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <p>Recipe Explorer frontend is running.</p>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <a
        className="App-link"
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Docs
      </a>
      <div style={{ marginTop: 20 }}>
        <NavLink
          to="/sign-in"
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            background: '#2563EB',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Go to Sign In
        </NavLink>
      </div>
    </header>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn11235 />} />
      </Routes>
    </div>
  );
}

export default App;
