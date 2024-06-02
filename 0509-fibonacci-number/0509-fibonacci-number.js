/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
  const fibArray = [0, 1];
  let index = 1;
  
  while (index < n) {
    fibArray.push(fibArray[index - 1] + fibArray[index]);
    index++;
  }
  
  return fibArray[n];
};
