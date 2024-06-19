/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
  const rankMap = {};
  const sortedScores = [...score].sort((a, b) => b - a);
  
  sortedScores.forEach((score, index) => {
    if (index === 0) {
      rankMap[score] = "Gold Medal";
    } else if (index === 1) {
      rankMap[score] = "Silver Medal";
    } else if (index === 2) {
      rankMap[score] = "Bronze Medal";
    } else {
      rankMap[score] = (index + 1).toString();
    }
  });
  
  return score.map(s => rankMap[s]);
};
