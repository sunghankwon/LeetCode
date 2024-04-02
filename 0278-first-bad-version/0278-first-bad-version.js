/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  return function(n) {
    let start = 1;
    let end = n;
    
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
        if (!isBadVersion(mid - 1)) {
          return end;
        }
      } else {
        if (start === mid) {
          return end;
        }
        start = mid
      }
    }

    return end;
  }
};