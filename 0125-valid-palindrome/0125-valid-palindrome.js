/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const lowerString = s.toLowerCase();
  const stringArray = [];
  
  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i].charCodeAt() > 96 && lowerString[i].charCodeAt() < 123) {
      stringArray.push(lowerString[i]);
    } else if (!isNaN(lowerString[i]) && lowerString[i] !== " ") {
      stringArray.push(lowerString[i]);
    }
  }
  
  return stringArray.join("") === stringArray.reverse().join("");
};