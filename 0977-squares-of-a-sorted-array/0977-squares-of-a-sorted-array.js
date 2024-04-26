/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {  
  let start = 0;
  let end = nums.length -1;
  const result = [];
    
  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result.push(nums[start] ** 2)
      start++;
    } else {
      result.push(nums[end] ** 2)
      end--;
    }
  }
    
  return result.reverse();
};
