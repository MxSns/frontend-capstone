import { validateEmail, validatePhoneNumber } from './validation';

test('validates correct email', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('invalidates incorrect email', () => {
  expect(validateEmail('test@example')).toBe(false);
  expect(validateEmail('test.com')).toBe(false);
  expect(validateEmail('')).toBe(false);
});

test('validates correct phone number', () => {
  expect(validatePhoneNumber('+1234567890')).toBe(true);
  expect(validatePhoneNumber('1234567890')).toBe(true);
});

test('invalidates incorrect phone number', () => {
  expect(validatePhoneNumber('12345')).toBe(false);
  expect(validatePhoneNumber('phone')).toBe(false);
  expect(validatePhoneNumber('')).toBe(false);
});