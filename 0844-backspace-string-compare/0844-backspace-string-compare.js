/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
  while (s.includes("#") || t.includes("#") ) {
    const indexS = s.indexOf("#")
    s = s.substring(0, indexS -1) + s.substring(indexS + 1);
    
    const indexT = t.indexOf("#")
    t = t.substring(0, indexT -1) + t.substring(indexT + 1);
  }
  
  return s === t ? true : false;
};