/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  
  const doubleGoal = goal + goal;
  
  return doubleGoal.includes(s);
};

