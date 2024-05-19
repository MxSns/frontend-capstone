import React from 'react';
import '../styles/header.css';
import '../styles/nav.css';

function Nav() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order-Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;