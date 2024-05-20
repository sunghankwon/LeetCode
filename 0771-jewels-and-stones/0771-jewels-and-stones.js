/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  
  for (let i = 0; i < jewels.length; i++) {
    count += stones.split(jewels[i]).length -1;
  }
  
  return count;
};
