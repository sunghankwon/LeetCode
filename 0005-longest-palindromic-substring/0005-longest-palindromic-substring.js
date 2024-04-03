/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0, maxLen = 1;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLen = right - left + 1;
      if (currentLen > maxLen) {
        start = left;
        maxLen = currentLen;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLen);
};