import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Specials from './components/Specials.js';
import Footer from './components/Footer.js';
import Reservations from './components/Reservations.js';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/reservations" element={<Reservations />} />
        </Routes>

        <Header />
        <Main />
        <Specials />
        <Footer />
      </Router>
    </>
  );
}

export default App;
