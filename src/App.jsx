import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/login';
import SignUp from './components/Auth/signup';
import Dashboard from './components/Dashboard/dashboard';
import Portfolio from './components/portfolio';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login onAuth={setUser} />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp onAuth={setUser} />}
        />
        <Route
          path="/portfolio"
          element={user ? <Portfolio user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
