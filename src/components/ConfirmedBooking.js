import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/confirmedBooking.css';

function ConfirmedBooking() {
    const location = useLocation();
    const { date, time, guests, name } = location.state || {};

    return (
        <>
        <Header />
        <body>
            <div className="confirmation">
            <h2>Booking confirmed</h2>
            <p>{name}, Your reservation has been confirmed for {date}, {time} o'clock, for {guests} guests.</p>
            <p>Thank you!</p>
            </div>
        </body>
        <Footer />
        </>
    )
};

export default ConfirmedBooking;
