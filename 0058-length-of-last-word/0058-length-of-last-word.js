/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  const arr = s.split(" ");
  let num = 1
  
  while(num <= arr.length) {
    if (arr[arr.length -num] !== "") {
      return arr[arr.length -num].length;
    } 
    num++;
  }
    
  return 0;
};