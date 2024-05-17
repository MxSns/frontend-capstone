import React from 'react';
import logo from '../assets/images/Logo.svg';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="restaurant logo" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order-Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <div>
                <h3>Contact</h3>
                <p>Adress</p>
                <p>phone number</p>
                <p>email</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <p>Adress</p>
                <p>phone number</p>
                <p>email</p>
            </div>
        </footer>
    );
}

export default Footer;