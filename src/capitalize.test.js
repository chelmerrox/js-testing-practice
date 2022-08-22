const capitalize = require('./capitalize');

test('capitalize the first character of a given string', () => {
  const stringA = '';
  const stringB = 123;
  const stringC = 'an actual string';
  
  expect(capitalize(stringA)).toBe('Empty string given.');
  expect(() => capitalize(stringB)).toThrow();
  expect(capitalize(stringC)).toBe('An actual string');
})