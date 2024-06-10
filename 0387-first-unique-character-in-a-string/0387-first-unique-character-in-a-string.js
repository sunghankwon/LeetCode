/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const obj = {};
  let oneChar = "";
  
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  
  for (let char in obj) {
    if (obj[char] === 1) {
      oneChar = char;
      break;
    }
  }
    
  
  return oneChar === "" ? -1 : s.indexOf(oneChar) ;
};
