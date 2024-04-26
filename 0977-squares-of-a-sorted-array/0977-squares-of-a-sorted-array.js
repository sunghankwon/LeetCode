/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {  
  let left = 0;
  let right = nums.length -1;
  const result = [];
  
  while (left < right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result.push(nums[left] ** 2)
      left++;
    } else {
      result.push(nums[right] ** 2)
      right--;
    }
  }
  result.push(nums[left] ** 2)
  
  return result.reverse();
};
