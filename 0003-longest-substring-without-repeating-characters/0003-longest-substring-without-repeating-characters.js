/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let charLength = 0;
  let spell = "";
  
  for(let i = 0; i < s.length; i++) {
    charLength++;
    spell = s[i];
    
    for (let j = i + 1; j < s.length; j++) {
      if (spell.includes(s[j])) {
        break;
      }
      
      charLength++;
      spell += s[j];
    }
    if (charLength > maxLength) {
      maxLength = charLength;
    }
    
    charLength = 0;
  }
  
  return maxLength;
};