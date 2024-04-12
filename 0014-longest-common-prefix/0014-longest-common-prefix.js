/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  
  let answer = "";
  let num = 0;
  
  while(num < strs[0].length) {
    let char = strs[0][num];
  
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][num] !== char || !strs[i][num]) {
        return answer;
      }
    }
    answer += strs[0][num];
    num++;
    
  }
  
  return answer;
};
