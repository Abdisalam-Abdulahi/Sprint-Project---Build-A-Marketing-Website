// Add your Javascript work here

// Task 1: Create a basic Calculator
const firstNumber = prompt("type the first bumber");
const secondNumber = prompt("type the second bumber");
const operation = prompt("type the operation");
let result;
if (operation == "+") {
  const work = parseInt(firstNumber) + parseInt(secondNumber);
  result = work;
  console.log(result);
} else if (operation == "-") {
  const work = parseInt(firstNumber) - parseInt(secondNumber);
  result = work;
  console.log(result);
} else if (operation == "*") {
  const work = parseInt(firstNumber) * parseInt(secondNumber);
  result = work;
  console.log(result);
} else if (operation == "/") {
  const work = parseInt(firstNumber) / parseInt(secondNumber);
  result = work;
  console.log(result);
}
/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
