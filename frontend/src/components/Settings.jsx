import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the settings page
    navigate('/settings');
  };

  return <button className="loginn" onClick={handleLogin}>Settings</button>;
};

export default Settings;