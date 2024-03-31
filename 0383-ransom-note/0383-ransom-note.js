/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
    
  if (magazine.includes(ransomNote)) {
    return true;
  }
  
  const spellR = {};
  const spellM = {};
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (!spellR[ransomNote[i]]) {
      spellR[ransomNote[i]] = 0;
    }
    spellR[ransomNote[i]]++;
  }
  
  for (let i = 0; i < magazine.length; i++) {
    if (!spellM[magazine[i]]) {
      spellM[magazine[i]] = 0;
    }
    spellM[magazine[i]]++;
  }
  
  for (let spell in spellR) {
    if (spellR[spell] > spellM[spell] || !spellM[spell]) {
      return false;
    }
  }
  
  return true;
};