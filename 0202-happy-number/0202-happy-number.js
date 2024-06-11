/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const set = new Set();
  
  while(n !== 1 && !set.has(n)) {
    set.add(n);
    n = sumNumber(n);
  }
  
  return n === 1;
};

function sumNumber(n) {
  let result = 0;
  while (n > 0) {
    const digit = n % 10;
    result += digit ** 2;
    n = Math.floor(n / 10);
  }
  
  return result;
}
