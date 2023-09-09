import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [agreed, setAgreed] = useState(false); // state for the checkbox
  const [signupStatus, setSignupStatus] = useState(null); // state for signup status

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!agreed) {
      console.error('Please agree to the terms and conditions.');
      return;
    }

    try {
      // Make a POST request to the server to create a new user
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        phone,
        email,
        password,
        role,
      });

      // Show the success popup
      // After successful signup, navigate to another page and show success popup
      setSignupStatus('success');
    } catch (error) {

      console.error('Signup failed', error);
      setSignupStatus('failure');
    }
  };

  useEffect(() => {
    if (signupStatus === 'success') {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2800); // Redirect to the dashboard after a 2.8-second delay
      return () => clearTimeout(timer);
    }
  }, [signupStatus, navigate]);

  const handleRetry = () => {
    setSignupStatus(null); // Reset signup status
  };

  const renderPopup = () => {
    if (signupStatus === 'success') {
      return <div className="popup success">Successfully signed up!</div>;
    } else if (signupStatus === 'failure') {
      return (
        <div className="popup failure">
          Signup failed. Please try again.
          <button onClick={handleRetry}>Retry</button>
        </div>
      );
    }
    return null;
  };

  return (
  <div>
    <Header />
    <div className="signupPage">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="left-section">
            <div className="form-field">
              <label htmlFor="name">Name* :</label>
              <input
                type="text"
                placeholder="Enter your Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email ID* :</label>
              <input
                type="email"
                placeholder="Enter Mail ID"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number* :</label>
              <input
                type="text"
                placeholder="Enter phone number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="right-section">
            <div className="form-field">
              <label htmlFor="password">Password* :</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password* :</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="role">What is your role* :</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option disabled hidden value="">
                  Choose your role
                </option>
                <option value="healthcare_entrepreneur">
                  Healthcare Entrepreneur
                </option>
                <option value="engineer">Engineer</option>
                <option value="doctors">Doctors</option>
                <option value="dealers_distributors">
                  Dealers/Distributors
                </option>
                <option value="hospitals_labs">Hospitals/Labs</option>
                <option value="student">Student</option>
                <option value="incubator_accelerator">
                  Incubator/Accelerator
                </option>
                <option value="investor">Investor</option>
                <option value="none">None of the above</option>
              </select>
            </div>
          </div>
          <br />
          <div className="subm-row">
            <div className="tnc">
              <input
                type="checkbox"
                id="termsAndConditions"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor="termsAndConditions">
                I agree to the {' '}
                <a href="/termsofuse" className="highlight-link">
                  Terms of Use
                </a>
                {' '}and{' '} 
                <a href="/privacypolicy" className="highlight-link">
                  Privacy Policy
                </a>
                {' '}of GTM4Health Platform*
              </label>
            </div>
            <button type="submit" className='btn-signup sbutton' disabled={!agreed}>
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      {renderPopup()} {/* Render the popup conditionally */}
        < Footer />
      </div>
  );
};

export default Signup;
