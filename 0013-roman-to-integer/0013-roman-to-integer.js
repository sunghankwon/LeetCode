/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    let pre = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const current = romanMap[s[i]];
        
        if (current < pre) {
            result -= current;
        } else {
            result += current;
        }
        pre = current;
    }
    
    return result;
};