// Problem: Given an input of a larger number, write an
// algorithm that adds up the digits of the number to a sum.
// If the sum is more than one digit, repeat the process until
// you have a sum that is one digit.
// Ex input: '999'
// Ex output: '9'
// Logic: '999' --> '27' --> '9'
// Ex input: '8767984'
// Ex output: '4'
// Logic: '8767984' --> '49' --> '13' --> '4'
// Givens
// -- The input will be in the form of a string, though it represents a number
// -- The string will only have digits (not letters or other characters)

function getToSingleNumber(num) {
  let isNotSingle = true;
  let numSplit = num.split("");
  while (isNotSingle) {
    let singleDigit = 0;
    numSplit.forEach((number) => {
      singleDigit += parseInt(number);
    });

    if (numSplit.length === 1) {
      isNotSingle = false;
      return singleDigit;
    } else {
      numString = singleDigit.toString();
      numSplit = numString.split("");
    }
  }
}

const num1 = "999";

const num2 = "8767984";

console.log("Num1 Solutions should by 9 and is : \n", getToSingleNumber(num1));
console.log("Num2 Solutions should by 4 and is : \n", getToSingleNumber(num2));
