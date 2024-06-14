/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
  const wordList = s.split(" ");
  
  if (pattern.length !== wordList.length) {
    return false;
  }
  
  const patternObj = {};
  
  for (let i = 0; i < pattern.length; i++) {
    if (!patternObj[pattern[i]]) {
      patternObj[pattern[i]] = wordList[i];
    } else {
      if (patternObj[pattern[i]] !== wordList[i]) {
        return false;
      }
    }
  }
  
  const onlyPattern = new Set();

  for (let spell in patternObj) {
    if (onlyPattern.has(patternObj[spell])) {
      return false;
    }
    onlyPattern.add(patternObj[spell]);
  }
  
  return true;
};

