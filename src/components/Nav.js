import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import '../styles/nav.css';

function Nav() {
    return (
        <nav className="navigation">

                <Link to="/" smooth={true} duration={1000} className="nav-item">Home</Link>
                <Link to="about" smooth={true} duration={1000} className="nav-item">About</Link>
                <Link to="menu" smooth={true} duration={1000} className="nav-item">Menu</Link>
                <Link to="reservations" smooth={true} duration={1000} className="nav-item">Reservations</Link>
                <Link to="order-online" smooth={true} duration={1000} className="nav-item">Order Online</Link>
                <Link to="login" smooth={true} duration={1000} className="nav-item">Login</Link>

        </nav>
    );
}

export default Nav;