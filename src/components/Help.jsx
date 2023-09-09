import React from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the help page
    navigate('/help');
  };

  return <button className="loginn" onClick={handleLogin}>Help</button>;
};

export default Help;