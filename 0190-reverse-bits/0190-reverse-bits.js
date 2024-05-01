/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  const bit = n.toString(2).padStart(32, "0").split("").reverse().join("");
  let result = 0;
  
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === "1") {
      result += 2 ** (32 - 1 - i);
    }
  }
  
  return result;
};
