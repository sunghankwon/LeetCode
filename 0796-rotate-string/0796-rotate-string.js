/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function(s, goal) {  
  if (s.length !== goal.length) {
    return false;
  }  
    
  return goal.repeat(2).includes(s);
};
