function generatesPrimes(maximum) {
   const MAX_PRIME = 10000;
   let prime = [];

   for (let i = 2 ; i < MAX_PRIME; i++ ) {
      if ( i % 2 !== 0 || i === 2) {
         prime.push(i);
      }
      if (prime.length === maximum) {
         return prime;
      }
   }
}

console.log(generatesPrimes(5));