/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = new Map(); // Create a Map to store numbers and their indices
  const result = []; // Initialize an array to store resulting indices
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // Check if the complement exists in the map
      result.push(i); // Push the current index to result
      result.push(map.get(target - nums[i])); // Push the index of complement to result
      return result; // Return the result array
    } else {
      map.set(nums[i], i); // Add the number and its index to the map
    }

    // console.log(map);
    // return result;
  }
  return result;
};

//Time Complexity O(n)
//console.log(twoSum([1, 2, 3, 4, 5], 9));

/*Time Complexity O(n^2) solution
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
*/
