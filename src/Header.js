import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Header Navigation">
        <ul>
          <li>
            <Link to="/" className="header__logo">
              Plannter
            </Link>
          </li>
          <li>
            <Link to="/plants">
              Plants
            </Link>
          </li>
          <li>
            <Link to="/feed">
              Feed
            </Link>
          </li>
          <li>
            <Link to="/account">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;