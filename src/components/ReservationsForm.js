import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api.js';
import { useNavigate } from 'react-router-dom';
import '../styles/reservationsForm.css';
import '../styles/general.css';

// Fonction pour initialiser les heures avec l'API
export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetchAPI(today);
  return times;
};

// Fonction pour mettre à jour les heures avec l'API en fonction de la date sélectionnée
export const updateTimes = async (date) => {
  const times = await fetchAPI(date);
  return times;
};

const ReservationForm = ({ availableTimes = [], setAvailableTimes }) => {
  const navigate = useNavigate(); // Utiliser le hook useNavigate
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    occasion: ''
  });

  // Chargement des heures disponibles initiales
  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      setAvailableTimes(times);
    };
    fetchInitialTimes();
  }, [setAvailableTimes]);

  // Gestion du changement des champs de formulaire
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Mise à jour des heures disponibles lorsque la date change
    if (name === 'date') {
      const times = await updateTimes(value);
      setAvailableTimes(times);
    }
  };

  // Gestion du changement du nombre d'invités
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
    const isSubmitted = await submitAPI(formData); // Assurez-vous que cette fonction renvoie une promesse
    if (isSubmitted) {
      navigate('/confirmedBooking', { state: { ...formData } }); // Rediriger vers la page de confirmation avec les données du formulaire
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
        <button type="button" className="form-button" onClick={() => handleGuestsChange(-1)}>-</button>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          readOnly
        />
        <button type="button" className="form-button" onClick={() => handleGuestsChange(1)}>+</button>
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
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;