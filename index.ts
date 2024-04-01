#! /usr/bin/env node
import inquirer from "inquirer";

 const answer = await inquirer.prompt([{message: "Enter first number", type: "number", name: "firstNumber"},
{messag: "Enter second number", type: "number" , name: "secondNumber"},
{
    message:"select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices:["Addition", "subtraction", "Multiplication", "Division"],
},

]);
//condtional statement
if(answer.operator === "Addition"){
    console.log("Additon:", answer.firstNumber + answer.secondNumber);

}
else if(answer.operator === "Subtraction"){
    console.log ("subtraction:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Mulplication"){
    console.log("Mulplication:", answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division"){
    console.log("Division:", answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select a valid operator");
}

