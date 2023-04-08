class ValidationError extends Error {
   constructor(message) {
      super(message);
      this.name = 'ValidationError';
   };
};

const json = '{"age": 23}';

try {
   const user = JSON.parse(json);

   if (!user.name) {
      throw new ValidationError('"name" is required');
   };

   if (!user.age) {
      throw new ValidationError('"age" is required');
   }
} catch (error) {
   if (error instanceof SyntaxError) {
      console.log(`JSON Syntax Error: ${error.message}`);
   } else if (error instanceof ValidationError) {
      console.log(`Invalid data: ${error.message}`);
   } else if (error instanceof ReferenceError){
      console.log(error.message);
   } else {
      console.log(error.stack);
   };
};