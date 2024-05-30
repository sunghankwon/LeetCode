/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const words = s.split(" ");
  const array = [];
  
  for (let word of words) {
    array.push(word.split("").reverse().join(""));
  }
  
  return array.join(" ");  
};