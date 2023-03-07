const reverseString = require('./string-reverse');

test('String should be reversed', () => {
  expect(reverseString('Hello')).toBe('olleH');
});