// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

let result3 = (parseFloat(numberOne) + parseFloat(numberTwo))
console.log(result3)
// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let result4 = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);
console.log(result4)
// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

result5 = ((one + two + three) / 3).toFixed(5)
// Show in the console the avg. with 5 decimals
console.log(result5)



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

letter = letters[2]
console.log(letter)

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const updatedFact = fact.replace("j","J")

console.log(updatedFact)
// --------------------------------------



