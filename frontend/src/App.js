import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import ProductTable from './components/ProductTable';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <ProductTable />
      ) : (
        <Login onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}


export default App;
