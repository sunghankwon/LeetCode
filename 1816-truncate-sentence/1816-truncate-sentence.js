/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function(s, k) {
  const arr = s.split(" ");
  arr.splice(k)
  
  return arr.join(" ");
};
