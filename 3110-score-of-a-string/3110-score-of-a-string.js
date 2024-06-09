/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function(s) {
  let score = 0;
  
  for (let i = 1; i < s.length; i++) {
    score += Math.abs(s[i - 1].charCodeAt() - s[i].charCodeAt());
  }
  
  return score;
};