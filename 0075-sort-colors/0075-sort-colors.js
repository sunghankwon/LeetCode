/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  return nums.sort((a, b) => a - b);
};