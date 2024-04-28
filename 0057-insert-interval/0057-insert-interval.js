/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const arr = intervals.concat([newInterval]).sort((a,b) => a[0] - b[0]);
  let currentS = arr[0][0];
  let currentE = arr[0][1];
  
  for (let i = 1; i < arr.length; i++) {
    if (currentE >= arr[i][0]) {
      currentE = Math.max(arr[i][1], currentE);
      arr[i - 1] = [currentS, currentE]
      arr.splice(i, 1);
      i--;
    } else {
      currentS = arr[i][0];
      currentE = arr[i][1];
    }
  }
  return arr;
};
