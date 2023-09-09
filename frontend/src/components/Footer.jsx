import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-content">
          <div className="social-icons">
            <a href="https://www.facebook.com/gtm4health">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/gtm4health">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/company/gtm4health">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
         <br />
          <span className="footer-text">
            <h1>&copy; 2023 GTM4Health</h1>
          </span>
        </div>
        <div className="right-content">
          <span className="footer-text">
            <h2>About</h2>
          </span>
          <span className="footer-text">
            <h2>Copyright Policy</h2>
          </span>
          <span className="footer-text">
            <h2>Terms and Conditions</h2>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
