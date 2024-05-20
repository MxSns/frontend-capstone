import React, { useState } from 'react';

import '../styles/reservationsForm.css';


const ReservationForm = () => {
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      guests: 1,
      name: '',
      email: '',
      phone: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleGuestsChange = (change) => {
      setFormData({
        ...formData,
        guests: Math.max(1, formData.guests + change)
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form data:', formData);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of guests:</label>
          <button type="button" onClick={() => handleGuestsChange(-1)}>-</button>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            readOnly
          />
          <button type="button" onClick={() => handleGuestsChange(1)}>+</button>
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default ReservationForm;