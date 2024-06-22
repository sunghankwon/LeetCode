/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
    for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
    
  return true;
};
