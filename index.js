#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("------ Lets Start------");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    let question = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.red("please enter paragraph you want to convert: ")
        }
    ]);
    const word_arr = question.str.split(" ");
    // console.log(word_arr);
    console.log(`words in paragraph = ${word_arr.length}`);
    const withOutSpace = question.str.replace(/ /g, "");
    console.log(`characters in paragraph = ${withOutSpace.length}`);
}
async function againStart() {
    do {
        await askQuestion();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.red("Do you want to restart?")
        });
    } while (playAgain.restart === 'Y' || playAgain.restart === 'y' || playAgain.restart === 'yes'
        || playAgain.restart === 'YES' || playAgain.restart === 'Yes' || playAgain.restart === 1);
}
againStart();
