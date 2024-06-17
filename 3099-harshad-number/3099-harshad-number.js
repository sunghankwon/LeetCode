/**
 * @param {number} x
 * @return {number}
 */
const sumOfTheDigitsOfHarshadNumber = function(x) {
  if (x === 100) return 1;
  
  const num = x % 10 + Math.floor(x / 10);
  
  return x % num === 0 ? num : -1;
};
