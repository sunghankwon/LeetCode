/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
  const result = [];
  const plus = nums.filter((num) => num >= 0);
  const minus = nums.filter((num) => num < 0);
  
  for (let i = 0; i < plus.length; i++) {
    result.push(plus[i]);
    result.push(minus[i]);
  }
  
  return result;
};