/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
  if (arr.length === 0) {
    return arr;
  }
  if (arr.length <= size) {
    return [arr];
  }
  
  const array = [];
  
  while(arr.length > 0) {
    array.push(arr.splice(0, size))
  }
  
  return array;
};
