/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const arr = nums.splice(n);
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i]);
    result.push(arr[i]);
  }
  
  return result;
};
