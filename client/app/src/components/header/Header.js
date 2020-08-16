import React from 'react';
import HeaderNav from './HeaderNav';
import Logo from '../logo/Logo';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Logo></Logo>
      <HeaderNav></HeaderNav>
    </div>
  );
};

export default Header;