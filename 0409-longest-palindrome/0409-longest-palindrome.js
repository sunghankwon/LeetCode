/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const array = s.split("");
  const obj = {};
  let count = 0;
  let isOdd = false;
  
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
      isOdd = true;
    }
  }
  
  return isOdd ? count + 1 : count;
};