/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  const array = [];
  
  for (let i = 0; i < indices.length; i++) {
    array[indices[i]] = s[i];
  }
  
  return array.join("");
};
