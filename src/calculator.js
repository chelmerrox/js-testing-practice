class Calculator {
  constructor(a,b){
    //this.numbers = numbers; numbers = [];
    this.a = a;
    this.b = b;
  }

  add(numA, numB){
    let sum = 0;
    
    //sum = this.numbers.reduce((total,c) => total + c );

    sum = numA + numB;
  
    return sum;
  }

  substract(numA, numB){
    let difference = 0;

    //difference = this.numbers.reduce((total,d) => total - d );

    difference = (numA) - (numB);

    return difference;
  }

  multiply(numA, numB){
    let product = 0;

    //product = this.numbers.reduce((total, e) => total * e );

    product = numA * numB;

    return product;
  }

  divide(numA, numB){
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

    if (numB === 0){
     return 'Can\'t divide by zero.';
    }

    quotient = numA/numB;

    return quotient;
  }
}

const x = new Calculator();

// Add
console.log(x.add(1,2)); // 3

// Add
console.log(x.add(3, -10)); //-7

// Subtract
console.log(x.substract(4,3));  //1

/*
// Subtract
console.log(x.subtract(5,-10)); //-5 */

// Mulitply
console.log(x.multiply(2,3)); //6

// Multiply
console.log(x.multiply(-3,4)); //-12


// Divide
console.log(x.divide(2,0)); // 'Can't divide by zero' message

// Divide
console.log(x.divide(3,-3));  //-1

module.exports = Calculator;