/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  const result = [];
  
  for (let i = 0; i < n + 1; i++) {
    const binaryScale = i.toString(2);
    result.push(binaryScale.split('1').length - 1);
  }
  
  return result;
};