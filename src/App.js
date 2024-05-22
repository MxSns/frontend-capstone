import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Specials from './components/Specials.js';
import Footer from './components/Footer.js';
import Reservations from './components/Reservations.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
