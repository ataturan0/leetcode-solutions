/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const resultArr = []; // Array to store the resulting indices
  let found = false; // Flag to track if a solution is found

  for (let i = 0; i < nums.length && !found; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        resultArr.push(i, j);
        found = true; // Set the flag to true to break the outer loop as well
        break; // Break the inner loop
      }
    }
  }
  //console.log(found); // Log whether a solution is found
 // console.log(resultArr);// Log the resulting indices
  return resultArr;
};

//console.log(twoSum([1, 2, 3, 4, 5], 9))
