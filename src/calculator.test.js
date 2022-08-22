const Calculator = require('./calculator.js');

describe('UnitTests', () => {
  it('adds two numbers', () => {
    const x = new Calculator();

    x.add(1, 2);
    x.add(3, -10);
  });

  it('subtracts two numbers', () => {
    const y = new Calculator();

    y.substract(4, 3);
    y.substract(5, -10);
  });

  it('multiplies two numbers', () => {
    const z = new Calculator();

    z.multiply(2, 3);
    z.multiply(-3, 4);
  });

  it('divides a number by a non-zero divisor (an integer)', () => {
    const m = new Calculator();

    // expect(() => m.divide(2,0)).toThrow();

    m.divide(2, 0);
    m.divide(3, -3);
  });
});