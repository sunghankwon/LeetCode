/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target < nums[0]) {
    return 0;
  }
  
  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  
  return start;
};
