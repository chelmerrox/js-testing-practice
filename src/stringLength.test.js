const stringLength = require('./stringLength.js');

test('returns the character count of the string', () => {
  const stringA = 'hello';
  const stringB = '';
  const stringC = 'Bula vinaka!';

  expect((stringLength(stringA))).toBe(5);
  expect(() => stringLength(stringB)).toThrow();
  expect(() => stringLength(stringC)).toThrow();
});
