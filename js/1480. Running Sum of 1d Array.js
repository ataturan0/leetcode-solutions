/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // Iterate through each element in the array using a for loop
  for (let i = 1; i < nums.length; i++) {
    // Calculate the running sum for the current element by adding the previous element's value
    nums[i] += nums[i - 1];
  }
  console.log(nums);
  return nums;
};
