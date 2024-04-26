/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
  const arr = [];
  
  for (let i = 0 ; i < nums.length; i++) {
    nums[i] = nums[i] *nums[i];
  }
  
  return nums.sort((a, b) => a - b);
};