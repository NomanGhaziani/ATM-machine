#!/usr/bin/env node
import inquirer from "inquirer";
//initilize user balance and pin code
let myBalance = 20000;
let myPin = 4100;
//print welcome message
console.log("Welcome to Noman Ghaziani - ATM machine");
let pinAnswer = await inquirer.prompt([{
    name : "pin",
    type :"number",
    message :"enter your pin code:"
}])
if(pinAnswer.pin === myPin){
console.log("pin is correct, login successfuly!");
console.log(`current amount balance is${myBalance}`);
let operationAnswer = await inquirer.prompt([{
    name : "operation",
    type :"list",
    message : "select an operation:",
    choices :["withDraw Amount","cheak Balance"]
}])
if(operationAnswer.operation === "withDraw Amount"){
let amountAnswer =await inquirer.prompt([{
    name :"amount",
    type : "number",
    message : "enter the amount to withDraw",
}])
if(amountAnswer.amount > myBalance){
console.log("insufficient balance");
}
else{
    myBalance -= amountAnswer.amount;
    console.log(`${amountAnswer.amount}withDraw successfully`);
    console.log(`your remaning balance is:${myBalance}`);
}
}
else if(operationAnswer.operation === "cheak balance"){
console.log(`your amount balance is: ${myBalance}`)
}
}
else{
    console.log("pin is incorrect,Try again!");
}