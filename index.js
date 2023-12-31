/*import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open'; */
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
// clear the terminal before showing the npx card
clear()
const prompt = inquirer.createPromptModule();
const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?", 
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:shekharh500@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];
const data = {
    name: chalk.bold.green("                     Himanshu Shekhar"),
    handle: chalk.white("@shekharh500"),
    fact: chalk.hex('#B10000')('Salesforce is my playground !!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/shekharh500"),
    github: chalk.hex('#787878')("https://github.com/shekharh500"),
    website: chalk.hex('#00AB9E')("https://www.npmjs.com/package/shekharh500"),
    npx: chalk.hex('#A1AB00')("npx shekharh500"),

    labelFact: chalk.hex('#FF6262').bold("        Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter :"),
    labelGitHub: chalk.hex('#9E9E9E').bold("        GitHub  :"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Npm Page:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Himanshu, A 9X Certified Salesforce Technical Lead." 
        )}`,
        `${chalk.bold("Proficient in B2C Commerce, Mulesoft, Amazon Connect, and more. ")}`,
        `${chalk.bold(
            "With 7 Super Badges, I've crafted over 70 successful projects and"
        )}`,`${chalk.bold(
            "developed 3+ App Exchange Products. In the world of Salesforce, I'm "
        )}`,
        `${chalk.bold(
            "the captain of innovation, exploring its vast playground and"
        )}`,`${chalk.bold(
            "turning challenges into victories."
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);
prompt(questions).then(answer => answer.action());
