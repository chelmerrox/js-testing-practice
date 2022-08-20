const reverseString = require('./reverseString');

test('reverses a string', () => {
  const stringA = 'Sarah';

  expect(reverseString(stringA)).toBe('haraS');
});