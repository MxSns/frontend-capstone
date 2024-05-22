import { render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import { fetchAPI } from '../api.js';

// Mock de fetchAPI
jest.mock('../api.js', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

beforeEach(() => {
  fetchAPI.mockClear();
});

test('renders the reservationForm heading', async () => {
  fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00', '20:00']);

  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const headingElement = screen.getByLabelText("Date:");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the guests label', async () => {
  fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00', '20:00']);

  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const guestsLabel = screen.getByLabelText("Number of guests:");
  expect(guestsLabel).toBeInTheDocument();
});