/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  const sortedHeights = [...heights].sort((a,b) => a - b);
  let count = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (sortedHeights[i] !== heights[i]) {
      count++;
    }
  }
  
  return count;
};
