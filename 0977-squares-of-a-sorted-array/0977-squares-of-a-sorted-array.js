/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {  
  return nums.map(a => a * a).sort((a, b) => a - b);
};