#! /usr/bin/env node
// import inquirer module which is command Line Interface for Node.js
import inquirer from "inquirer"
// Declare a constant answers and assign it to the result of inquirer.prompt function
const answers: {
    Sentence : string
 } = await inquirer.prompt(
        [
            {
                name: "Sentence",
                type: "input",
                message: "Enter Your Sentence to Count the Word!!"
            }
        ]
    );

const words = answers.Sentence.trim().split(" ");
// Print the Array of words to the console
console.log(words)
// Print the word count of the sentence to the console

console.log(`Your sentence word Count is ${words.length}`);
