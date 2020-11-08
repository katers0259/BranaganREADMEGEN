const inquirer = require('inquirer');
const fs = requir('fs');
const util = require('uti');

const markdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [{
    type: "input",
    message: "What is your projects title?",
    name: "Title",
},
{
    type:"input",
    message: "Give a description of what the project is about",
    name: "Description",
},
{
    type:"checkbox",
    message: "Choose your table of contents items",
    name: "stack",
    choices: ['Title','Description','Usage','License','Contributors'],
},
{
    type:"input",
    message:"How do you use the app, and what do you need to install?",
    name: "Usage",
},
{
    type: "input",
    message: "Who worked on this?",
    name: "Contributors",
},
{
    type:"input",
    message:"What license are you using?",
    name: "License",
},
{
    type:"input",
    message:"What is your Github username?",
    name:"Username",
},
{
    type:"input",
    message:"What is your email address?",
    name:"Email",
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
