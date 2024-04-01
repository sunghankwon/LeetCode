/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let maxCount = 0;
  let count = 0;
  let spell = "";
  
  for(let i = 0; i < s.length; i++) {
    count++;
    spell = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (spell.includes(s[j])) {
        break;
      }
      count++;
      spell += s[j];
    }
    if (count > maxCount) {
      maxCount = count;
    }
    count = 0;
  }
  
  return maxCount;
};