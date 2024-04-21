/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  let count = nums.length;
  let obj = {};
  
  for (let i = 0; i < count + 1; i++) {
    obj[i] = 0;
  }
  
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]]++;
  }
  
  for (let key in obj) {
    if (obj[key] === 0) {
      return Number(key);
    }
  }
};
