import React from 'react';

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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy Statement</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;