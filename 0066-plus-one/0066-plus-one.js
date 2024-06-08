/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const copyArr = [...digits];
  
  for (let i = copyArr.length - 1; i >= 0; i--) {
    copyArr[i] = copyArr[i] + 1;
    
    if (copyArr[i] < 10) {
      break;
    } else {
      copyArr[i] = 0;
      if (!copyArr[i - 1]) {
        copyArr.unshift(1)
      }
    }
  }
  
  return copyArr;
};