/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const sumArray = [];
  //Loop through all elements in the array using a for loop
  for (let i = 0; i < nums.length; i++) {
    // Calculate the running sum for each element
    let tempSum = 0;
    for (let j = 0; j <= i; j++) {
      tempSum += nums[j];
    }
    sumArray[i] = tempSum;
  }
  console.log(sumArray);
  return sumArray;
};
