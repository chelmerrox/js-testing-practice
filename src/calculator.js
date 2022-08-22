class Calculator {
  constructor(a, b) {
    // this.numbers = numbers; numbers = [];
    // this.operations = []; operations = [];
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    let sum = 0;

    // sum = this.numbers.reduce((total,c) => total + c );

    sum = this.a + this.b;

    sum = a + b;

    return sum;
  }

  substract(a, b) {
    let difference = 0;

    // difference = this.numbers.reduce((total,d) => total - d );

    difference = (this.a) - (this.b);

    difference = (a) - (b);

    return difference;
  }

  multiply(a, b) {
    let product = 0;

    // product = this.numbers.reduce((total, e) => total * e );

    product = this.a * this.b;

    product = a * b;

    return product;
  }

  divide(a, b) {
    let quotient = 0;

    /* quotient = this.numbers.reduce((total, f) => {
      if (f === 0){
        throw new Error('Can\'t divide by zero.');
      } else {
        total/f;
      }
    });
   */

    /* if (numB === 0){
      throw new Error('Can\'t divide by zero.');
    } */

    if (this.b === 0) {
      return 'Can\'t divide by zero.';
    }

    quotient = this.a / this.b;

    quotient = a / b;

    return quotient;
  }
}

 const x = new Calculator();

// Add
 console.log(x.add(1, 2)); // 3

// Add
// console.log(x.add(3, -10)); // -7

// Subtract
// console.log(x.substract(4, 3)); // 1

/*
// Subtract
console.log(x.subtract(5,-10)); //-5 */

// Mulitply
// console.log(x.multiply(2, 3)); // 6

// Multiply
// console.log(x.multiply(-3, 4)); // -12

// Divide
// console.log(x.divide(2, 0)); // 'Can't divide by zero' message

// Divide
// console.log(x.divide(3, -3)); // -1

module.exports = Calculator;