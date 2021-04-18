import React from 'react';
import logo from './checklist.svg'

const Header = () => (
  <div className="app-header">
    <div className="nav-brand">
      <img src={logo} className="app-logo" alt="logo" />
    </div>
    <div className="nav-text">Fantasy Checkdown</div>
  </div>
)

export default Header;