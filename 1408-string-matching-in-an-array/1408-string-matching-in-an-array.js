/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
  const set = new Set();
  
  for (let i = 0; i < words.length; i++) {
    for (let j= 0; j < words.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (words[i].includes(words[j])) {
          set.add(words[j]);
        }
      }
    }
  }
   
  return Array.from(set);
};
