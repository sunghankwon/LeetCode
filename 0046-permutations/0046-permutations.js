/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const result = [];
  
  function getPermutaion(arr, current = []) {
    if (arr.length === 0) {
      result.push(current);
      return;
    }
    
    for (let i = 0; i < arr.length; i++) {
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      getPermutaion(remaining, current.concat(arr[i]));
    }
  }
  
  getPermutaion(nums);
  
  return result;
};
