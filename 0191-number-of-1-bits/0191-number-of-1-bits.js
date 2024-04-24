/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
  const arr = n.toString(2).split("0").join("");
  
  return arr.length;
};