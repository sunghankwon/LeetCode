/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const obj = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    } 
    obj[nums[i]]++;
    
    if (obj[nums[i]] === 2) {
      return true;
    }
  }
  
  return false;
};
