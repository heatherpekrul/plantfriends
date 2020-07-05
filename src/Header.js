import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Header Navigation">
        <ul>
          <li>
            <a href="#" className="header__logo">Plannter</a>
          </li>
          <li>
            <a href="#">Plants</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Connections</a>
          </li>
          <li>
            <a href="#">Light/Dark Mode</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;