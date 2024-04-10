/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let current = 0;
  
  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }
  
  return max;
};
