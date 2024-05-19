import React from 'react';
import Nav from './Nav.js';
import '../styles/header.css';
import logo from '../assets/images/Logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Restaurant logo" />
            <Nav />
        </header>
    );
}

export default Header;