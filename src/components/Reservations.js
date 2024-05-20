import React from 'react';
import Nav from './Nav.js';
import ReservationsFrom from './ReservationsForm.js';
import '../styles/reservations.css';
import '../styles/general.css';
import TheChef from '../assets/images/restaurantchefB.webp';

function Reservations () {
    return (
        <>
            <Nav />
            <div className="booking-photo">
                <h2>Reserve a table</h2>
                <img src={TheChef} alt="Picture of the chef at work" />
            </div>

            <div className="booking-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            <div className="booking-hours">
                <p>Welcomes you each day from 11am to 3pm for lunch, and 7pm to 11 pm for dinner</p>
            </div>
            <ReservationsFrom />

        </>


    )
}

export default Reservations;