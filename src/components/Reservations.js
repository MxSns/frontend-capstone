import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ReservationsForm from './ReservationsForm.js';
import '../styles/reservations.css';
import '../styles/general.css';
import TheChef from '../assets/images/theChef.webp';

const Reservations = () => {
    const [availableTimes, setAvailableTimes] = useState([]);
    return (
        <div>
            <Header />
            <body>
                <div className="booking-photo">
                    <h2>Reserve a table</h2>
                    <img src={TheChef} alt="the chef at work" />
                </div>
                <div className="container-title">
                <div className="booking-title">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="booking-hours">
                    <p>Welcomes you each day from 11am to 3pm for lunch, and 7pm to 11 pm for dinner</p>
                </div>
                </div>
            </body>
            <ReservationsForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            <Footer />

        </div>


    )
}

export default Reservations;