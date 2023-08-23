/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let stepsNeededToReduceToZero = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      num = num / 2;
      stepsNeededToReduceToZero++;
    } else {
      num = num - 1;
      num = num / 2;
      stepsNeededToReduceToZero++;
    }
  }
  return stepsNeededToReduceToZero;
};

console.log(numberOfSteps(14));

//Time Complexity: O(logn)
