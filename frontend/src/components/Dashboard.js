import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleNavigation('/product')}>
        Product
      </button>
      <button onClick={() => handleNavigation('/ransomware')}>
        Ransomware
      </button>
    </div>
  );
};

export default Dashboard;
