import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          © 2020 <a href="https://heatherpekrul.com">Heather Pekrul</a>. All rights reserved.
        </div>
        
        <nav className="footer__nav" aria-label="Footer Navigation">
          <ul>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                Privacy Statement
              </Link>
            </li>
            <li>
              <Link to="/accessbility">
                Accessibility
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;