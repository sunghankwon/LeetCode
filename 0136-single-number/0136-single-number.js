/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const obj = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    };
    
    obj[nums[i]]++;
  }
  
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};