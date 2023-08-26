/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Create a map to associate each opening parenthesis with its corresponding closing parenthesis
  const map = new Map();
  let openParantheses = [];
  map.set("(", { type: "open", corresponding: ")" });
  map.set(")", { type: "close", corresponding: "(" });

  map.set("[", { type: "open", corresponding: "]" });
  map.set("]", { type: "close", corresponding: "[" });

  map.set("{", { type: "open", corresponding: "}" });
  map.set("}", { type: "close", corresponding: "{" });

  // If the length of the input string is odd, it cannot contain balanced parentheses
  if (s.length % 2 != 0) {
    return false;
  }
  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // If the character is an opening parenthesis, push its corresponding object into the stack
    if (map.get(s[i]).type == "open") {
      openParantheses.push(map.get(s[i]));
    } else {
      // If the character is a closing parenthesis
      // Check if the stack is not empty
      if (openParantheses.length > 0) {
        // Pop the last object from the stack
        let temp = openParantheses.pop();
        // If the corresponding closing parenthesis matches the current character, continue to the next iteration
        if (temp.corresponding == s[i]) {
          continue;
        } else {
          // If there is a mismatch, return false
          return false;
        }
      } else { // If the stack is empty, return false
        return false;
      }
    }
  }
  // If the stack is empty at the end, all parentheses are balanced
  if (openParantheses.length == 0) {
    return true;
  }
  // If the stack is not empty at the end, not all parentheses are balanced
  return false;
};
// Test the function with an example input
//console.log(isValid("()[]{}"));
