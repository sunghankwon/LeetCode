/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
  const result = [];
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value === 2) {
      result.push(key);
    }
  }
  
  return result;
};
