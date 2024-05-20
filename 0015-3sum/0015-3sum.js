/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const array = [];
  
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
     continue; 
    }
    
    let start = i + 1;
    let end = sortedNums.length - 1;

    while (start < end) {
      const sum = sortedNums[i] + sortedNums[start] + sortedNums[end];
      
      if (sum === 0) {
        array.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
        
        while (start < end && sortedNums[start] === sortedNums[start + 1]) start++;
        while (start < end && sortedNums[end] === sortedNums[end - 1]) end--;
        
        start++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  
  return array;
};