/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let result = Infinity;
  
    for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
     continue; 
    }
    
    let start = i + 1;
    let end = sortedNums.length - 1;

    while (start < end) {
      const sum = sortedNums[i] + sortedNums[start] + sortedNums[end];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
          result = sum;
      }
      
      if (sum === target) {
        return target;
      } 
        else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  
  return result;
};
