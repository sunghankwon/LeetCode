/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  const binary = num.toString(2);
  let reverse = "";
  for(let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      reverse += "0";
    } else {
      reverse += "1";
    }
  }
  
  return parseInt(reverse, 2);  
};