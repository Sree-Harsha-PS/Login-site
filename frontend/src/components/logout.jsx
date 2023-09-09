import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the logout page
    // Clear all tokens and data from local storage
    localStorage.clear();
    navigate('/');
  };

  return <button className="loginn" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
