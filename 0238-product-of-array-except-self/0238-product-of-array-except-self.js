/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let n = nums.length;
    let leftArray = Array(n).fill(1);
    let rightArray = Array(n).fill(1);
    let resultArray = Array(n);

    for (let i = 1; i < n; i++) {
        leftArray[i] = leftArray[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        rightArray[i] = rightArray[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        resultArray[i] = leftArray[i] * rightArray[i];
    }

    return resultArray;
};
