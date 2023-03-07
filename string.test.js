import stringLength from './string-length';
import stringCheck from './string-error';

test('Length of Blessing is 8', () => {
  expect(stringLength('Blessing')).toBe(8);
});

test('It should Throw an error message', () => {
  expect(() => stringCheck('')).toThrow('String must be at least 1 character long');
});