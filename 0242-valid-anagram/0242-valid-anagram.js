/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if(s.length !== t.length) {
    return false;
  }
  
  const spellS = {};
  const spellT = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!spellS[s[i]]) {
      spellS[s[i]] = 0;
    }
    if (!spellT[t[i]]) {
      spellT[t[i]] = 0;
    }
    spellS[s[i]]++;
    spellT[t[i]]++;
  }
  
  for (let spell in spellS) {
    if (spellS[spell] !== spellT[spell]) {
      return false;
    }
  }
  
  return true;
};