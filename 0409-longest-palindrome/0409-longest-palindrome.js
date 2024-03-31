/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const answer = [];
  const array = s.split("");
  const obj = {};
  let count = 0;
  let holcount = 0;
  
  for (let spell of array) {
    if (!obj[spell]) {
      obj[spell] = 0;
    }
    obj[spell]++;
  }
  
  for (let spell in obj) {
    if(obj[spell] % 2 === 0) {
      count += obj[spell];
    } else {
      count += obj[spell] - 1
      holcount++;
    }
  }
  
  return holcount === 0 ? count : count + 1;
};