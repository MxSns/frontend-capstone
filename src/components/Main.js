import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/general.css';
import MainPhoto from '../assets/images/restauranfood.webp';

function Main() {
    return (
        <main>
            <div className="presentation">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sot amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore</p>
            <Link to="/reservations">
                <button className="btn">Book a table</button>
            </Link>
            </div>
            <div className="mainPhoto">
                <img src={MainPhoto} alt="Little Lemon main recipe" />
            </div>
        </main>
    );
}

export default Main;