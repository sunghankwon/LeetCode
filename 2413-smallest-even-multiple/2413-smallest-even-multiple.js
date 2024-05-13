/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = function(n) {
  let number = 1;
  
  while(1) {
    let num = n * number;
    if (num % 2 === 0) {
      return num;
    }
    number++;
  }
};