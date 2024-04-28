/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  const arr = intervals.concat([newInterval]).sort((a,b) => a[0] - b[0]);
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1][1] >= arr[i][0]) {
      arr[i - 1][1] = Math.max(arr[i][1], arr[i - 1][1]);
      arr[i - 1] = [arr[i - 1][0], arr[i - 1][1]]
      arr.splice(i, 1);
      i--;
    } else {
      currentS = arr[i][0];
      currentE = arr[i][1];
    }
  }
  return arr;
};