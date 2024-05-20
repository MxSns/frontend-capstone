import React from 'react';
import { Link } from 'react-scroll';
import '../styles/footer.css';
import '../styles/nav.css';
import logo from '../assets/images/Logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="restaurant logo" />
            <nav className="footer-navigation">
                <Link to="home" smooth={true} duration={1000} className="nav-item">Home</Link>
                <Link to="about" smooth={true} duration={1000} className="nav-item">About</Link>
                <Link to="menu" smooth={true} duration={1000} className="nav-item footer-nav">Menu</Link>
                <Link to="reservations" smooth={true} duration={1000} className="nav-item">Reservations</Link>
                <Link to="order-online" smooth={true} duration={1000} className="nav-item">Order Online</Link>
                <Link to="login" smooth={true} duration={1000} className="nav-item">Login</Link>
            </nav>
                <div>
                    <h3>Contact</h3>
                    <p>Adress</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
                <div className="socials">
                    <h3>Social Media Links</h3>
                    <p>Adress</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
        </footer>
    );
}

export default Footer;