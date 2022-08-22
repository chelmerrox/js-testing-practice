const reverseString = require('./reverseString.js');

test('reverses a string', () => {
  const stringA = 'Sarah';

  expect(reverseString(stringA)).toBe('haraS');
});