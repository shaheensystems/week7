import React from 'react';
import Navigation from './Navigation';
import "./Header.css";
function Header() {
  return (
    <header className="header">
      Weather App
      <Navigation />
    </header>
  );
}

export default Header;

