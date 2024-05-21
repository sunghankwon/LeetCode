/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  let str = num.toString();
  
  if (str.length === 1) {
    return num;
  }
  
  while(str.length > 1) {
    let num = 0;
    
    for (let i = 0; i < str.length; i++) {
      num += Number(str[i]);
    }
    str = num.toString();
  }
    
  return Number(str);
};