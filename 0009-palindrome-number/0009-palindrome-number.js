/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const num = x.toString();
  const reverse = num.split("").reverse().join("");
  
  return num === reverse;
};
