import React from 'react';
import logo from '../assets/images/Logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="Restaurant logo" />
            <h1>
                Little Lemon
            </h1>
        </header>
    );
}

export default Header;