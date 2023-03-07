const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

test('First letter to uppercase', () => {
  expect(capitalize('candy')).toBe('Candy');
});