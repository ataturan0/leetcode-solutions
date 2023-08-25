/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;

  // Define the correspondence between Roman numerals and their integer equivalents
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Iterate through the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    let first = map[s[i]];
    let second = map[s[i + 1]];

    // If the value of the next symbol is greater, subtract the current value
    if (first < second) {
      result -= first;
    } else {
      result += first;
    }
  }
  return result;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
//console.log(romanToInt("DCXXI"));
