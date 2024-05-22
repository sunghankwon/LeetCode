/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = function(n) {
  let result = 0;
  let str = n.toString();
  
  for(let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += Number(str[i]);
    } else {
      result -= Number(str[i]);
    }
  }
  return result;
};
