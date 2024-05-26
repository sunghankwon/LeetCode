/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  let obj = {};
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;
  }
  
  for (let num in obj) {
    if (obj[num] === 1) {
      result += Number(num);
    }
  }
    
  return result;
};
