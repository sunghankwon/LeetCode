/**
 * @param {string} s
 * @return {string}
 */
const replaceDigits = function(s) {
  let result = "";
  
  for (let i = 0; i < s.length; i++) {
    if(s[i].charCodeAt() >= 97 && s[i].charCodeAt() < 123) {
      result += s[i];
    } else {
      let char = s[i - 1].charCodeAt() + Number(s[i]);
      result += String.fromCharCode(char);
    }
  }
    
  return result;
};
