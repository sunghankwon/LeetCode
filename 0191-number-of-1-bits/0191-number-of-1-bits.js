/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
  const string = n.toString(2);
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") {
      count++;
    }  
  }
  
  return count;
};