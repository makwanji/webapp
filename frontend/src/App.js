import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Ransomware from './components/Ransomware';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div>
      {isAuthenticated ? (
        <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/product" element={<Product />} />
            <Route path="/ransomware" element={<Ransomware />} />
            <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Default route */}
          </Routes>
        </Router>
      ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
