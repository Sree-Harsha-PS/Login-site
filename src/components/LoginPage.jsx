import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if the email and password fields are empty
    if (!email || !password) {
      console.log('Email and password are required');
      return;
    }

    try {
      // Make a POST request to the server to authenticate the user
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Check if the login email is the master email
      const isAdmin = email === 'abc@master.com';

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);

      // Store the admin flag in local storage
      localStorage.setItem('isAdmin', isAdmin);

      // Redirect to the appropriate dashboard (admin or user)
      navigate(isAdmin ? '/admin' : '/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      // Clear the entered password field
      setPassword('');
    }
  };
  
  return (
    <div>
      <Header />
      <div className="login-container">
        <h1 className="signup-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="centrepage">
            <div className="log-field">
              <label htmlFor="email">&nbsp; &nbsp; &nbsp; &nbsp; Email*&nbsp; :</label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="log-field">
              <label htmlFor="password">Password*&nbsp; :</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="subm-row">
              <button className="login-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
