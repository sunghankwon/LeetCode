/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  const sortedNums = nums.sort((a,b) => a - b);
  const array = [];
  const result = [];
  const seen = new Set();

  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = i + 1; j < sortedNums.length; j++) {
      let start = j + 1;
      let end = sortedNums.length - 1;
      while (start < end) {
        const sum = sortedNums[i] + sortedNums[j] + sortedNums[start] + sortedNums[end];
        if (sum === target) {
          array.push([sortedNums[i], sortedNums[j], sortedNums[start], sortedNums[end]]);
          while (start < end && sortedNums[start] === sortedNums[start + 1]) start++;
          while (start < end && sortedNums[end] === sortedNums[end - 1]) end--;
          start++;
          end--;
        } else if (sum > target) {
          end--;
        } else {
          start++;
        }
      } 
    }
  }
  array.forEach(innerArray => {
    const key = JSON.stringify(innerArray);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(innerArray);
    }
  });

  return result
};
