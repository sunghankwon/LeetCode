/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let length = Math.max(a.length, b.length);
  a = String(a).padStart(length, "0"); 
  b = String(b).padStart(length, "0"); 
  let answer = [];
  let plus = 0;
  
  for (let i = a.length -1; i >= 0; i--) {
    let hab = Number(a[i]) + Number(b[i]) + plus;
    if (hab >= 2) {
      answer.push(hab - 2);
      plus = 1;
    } else {
      answer.push(hab);
      plus = 0;
    }
  }
  
  if (plus === 1) {
    answer.push(1);
    return answer.reverse().join("");
  } else {
    return answer.reverse().join("");
  }
};