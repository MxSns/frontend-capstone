import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api.js';
import { useNavigate } from 'react-router-dom';
import '../styles/reservationsForm.css';
import '../styles/general.css';

// intialize hours wit api
export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetchAPI(today);
  return times;
};

// update hours
export const updateTimes = async (date) => {
  const times = await fetchAPI(date);
  return times;
};

const ReservationForm = ({ availableTimes = [], setAvailableTimes }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    occasion: ''
  });


  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      setAvailableTimes(times);
    };
    fetchInitialTimes();
  }, [setAvailableTimes]);


  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });


    if (name === 'date') {
      const times = await updateTimes(value);
      setAvailableTimes(times);
    }
  };


  const handleGuestsChange = (change) => {
    setFormData({
      ...formData,
      guests: Math.max(1, formData.guests + change)
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate('/confirmedBooking', { state: { ...formData } });
    } else {
      alert('Failed to submit reservation.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-label">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-label">
        <label>Time:</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
      </div>
      <div className="form-label">
        <label>Number of guests:</label>
        <button type="button" aria-label="On Click" className="form-button" onClick={() => handleGuestsChange(-1)}>-</button>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          readOnly
        />
        <button type="button" aria-label="On Click" className="form-button" onClick={() => handleGuestsChange(1)}>+</button>
      </div>
      <div className="form-label">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-label">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-label">
        <label>Phone number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-label">
        <label>Occasion:</label>
        <input
          type="text"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        />
      </div>
      <button className="btn" aria-label="On Click" type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;