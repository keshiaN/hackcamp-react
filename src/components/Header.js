import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.svg';

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Flix</h1>
    </header>
  );
};
