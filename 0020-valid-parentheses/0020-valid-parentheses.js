/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }

  const arr = [];
  const open = new Set(["(", "{", "["])
  
  for (let i = 0; i < s.length; i++) {
    if (open.has(s[i])) {
      arr.push(s[i])
      continue;
    }
    
    let last = arr.pop();
    
    if (s[i] === ")" && last !== "(") {
      return false;
    }
    if (s[i] === "}" && last !== "{") {
      return false;
    }
    if (s[i] === "]" && last !== "[") {
      return false;
    }
  }
  
  return arr.length === 0 ? true : false
};
