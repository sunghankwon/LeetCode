/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  function check(index, lastZero) {
    if (index >= nums.length) return;

    if (nums[index] !== 0) {
      let temp = nums[lastZero];
      nums[lastZero] = nums[index];
      nums[index] = temp;
      lastZero++;
    }
    check(index + 1, lastZero);
  }

  check(0, 0);
};
