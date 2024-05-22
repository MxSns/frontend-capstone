import { render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import { fetchAPI } from '../api.js';

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

test('date input has required attribute', () => {
  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const dateInput = screen.getByLabelText('Date:');
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
});

test('time select has required attribute', () => {
  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const timeSelect = screen.getByLabelText('Time:');
  expect(timeSelect).toHaveAttribute('required');
});

test('name input has required attribute', () => {
  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const nameInput = screen.getByLabelText('Name:');
  expect(nameInput).toHaveAttribute('required');
  expect(nameInput).toHaveAttribute('type', 'text');
});

test('email input has required attribute and correct type', () => {
  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toHaveAttribute('required');
  expect(emailInput).toHaveAttribute('type', 'email');
});

test('phone input has required attribute and correct type', () => {
  render(<ReservationForm availableTimes={[]} setAvailableTimes={() => {}} />);
  const phoneInput = screen.getByLabelText('Phone number:');
  expect(phoneInput).toHaveAttribute('required');
  expect(phoneInput).toHaveAttribute('type', 'tel');
});