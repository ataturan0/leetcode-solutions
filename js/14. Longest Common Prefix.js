/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonStr = ""; // Initialize the common prefix
  let allSame = true; // Flag to track if all characters in the current position are the same

  // Find the length of the shortest string among the input strings
  const shortest = findLengthOfShortestString(strs);

  // Iterate through each character position
  for (let i = 0; i < shortest; i++) {
    let temp = null; // Temporary variable to hold the character at the current position

    // Iterate through each string while characters are the same
    for (let j = 0; j < strs.length && allSame; j++) {
      if (temp == null) {
        temp = strs[j][i];
        commonStr = commonStr.concat(strs[j][i]);
      } else if (temp == strs[j][i]) {
        // Characters are the same, continue
      } else {
        // Characters are different, update commonStr and exit loop
        commonStr = commonStr.substring(0, commonStr.length - 1);
        allSame = false;
        break;
      }
    }
  }
  return commonStr; // Return the longest common prefix
};

// Helper function to find the length of the shortest string in an array
var findLengthOfShortestString = function (strs) {
  let shortest = 200;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortest) {
      shortest = strs[i].length;
    }
  }
  return shortest;
};

//console.log(longestCommonPrefix(["flow", "flower", "flight"]));
