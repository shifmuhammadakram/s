import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

console.log(answer);
// conditional statement
if (answer.operator === "addition"){
  console.log( answer.firstnumber + answer.secondNumber);
} else if (answer.operator === "subtraction"){
  console.log( answer.firstnumber - answer.secondNumber);  
} else if (answer.operator === "multiplication"){
  console.log( answer.firstnumber * answer.secondNumber);  
} else if (answer.operator === "division"){
  console.log( answer.firstnumber / answer.secondNumber);  
} else {
  console.log("please select valid operator")
}
