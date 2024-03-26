#! /usr/bin/env node

import inquirer from 'inquirer';

const answer = await inquirer.prompt([{
    name: "userInput",
    type: "number",
    message: "Enter your guess number 1-6"
}])

const randomNumber = Math.floor(Math.random() * 6) + 1;

if (answer.userInput === randomNumber) {
    console.log("You guessed right");
} else {
    console.log("You guessed wrong");
}