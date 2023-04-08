// create validation error
class ValidationError extends Error {
   constructor(message) {
      super(message);
      this.name = 'ValidationError';
   }
}

// create validation argument
function validateInputNumber(...args) {
   const [ num1, num2, num3 ] = args;

   if (typeof num1 !== 'number') {
      throw new ValidationError('The first argument must be number');
   } else if (typeof num2 !== 'number') {
      throw new ValidationError('The second argument must be number');
   } else if (typeof num3 !== 'number') {
      throw new ValidationError('The third argument must be number');
   };
};

// create function detect triangle
function detectTriangle(a, b, c) {
   try {
      validateInputNumber(a, b, c);
      if (a === b && b === c) {
         return 'equilateral triangle';
      } else if (a === b || b === c || a === c) {
         return 'Isosceles Triangle';
      } else {
         return 'Scalene Triangle';
      }
   } catch (error) {
      return error.message;
   };
};

console.log(detectTriangle(3, false, 1));