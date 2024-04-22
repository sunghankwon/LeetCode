/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const num = x.toString();
  const reverse = x.toString().split("").reverse().join("")
  
  return num === reverse
};
