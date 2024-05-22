import { initializeTimes, updateTimes } from './ReservationForm';
import { fetchAPI } from '../api.js';

// Mock de fetchAPI
jest.mock('../api.js', () => ({
  fetchAPI: jest.fn(),
}));

beforeEach(() => {
  fetchAPI.mockClear();
});

test('initializeTimes returns correct initial times', async () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00"];
  fetchAPI.mockResolvedValue(mockTimes);

  const initialTimes = await initializeTimes();
  expect(initialTimes).toEqual(mockTimes);
});

test('updateTimes returns the same times given', async () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00"];
  fetchAPI.mockResolvedValue(mockTimes);

  const date = new Date().toISOString().split('T')[0];
  const updatedTimes = await updateTimes(date);
  expect(updatedTimes).toEqual(mockTimes);
});