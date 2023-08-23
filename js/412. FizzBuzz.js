/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];
  const fizz = "Fizz";
  const buzz = "Buzz";
  const fizzBuzz = "FizzBuzz";

  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = i % 3 == 0;
    const divisibleBy5 = i % 5 == 0;

    if (divisibleBy3 && divisibleBy5) {
      answer.push(fizzBuzz);
    } else if (divisibleBy5) {
      answer.push(buzz);
    } else if (divisibleBy3) {
      answer.push(fizz);
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
};

//console.log(fizzBuzz(15));
