/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
  const obj = {};
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;
  }
  for (let num in obj) {
    if(obj[num] === 2) {
      result.push(Number(num))
    }
  }
  
  return result;
};

