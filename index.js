const inquirer = require('inquirer');
const fs = require('fs');


const markdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [{
    type: "input",
    message: "What is your projects title?",
    name: "Title",
},
{
    type:"input",
    message: "Give a description of what the project is about?",
    name: "Description",
},

{
    type:"input",
    message: "input your table of contents, seperated by commas:",
    name: "Table of Contents",
},
{
    type:"input",
    message:"What does the user need to install to use the application?",
    name:"Installation",
},
{
    type:"input",
    message:"How do you use the app?",
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
    message:"What do you need to do to test this app?",
    name: "Test",
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
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return;
        };
    });
};

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(data) {
    writeToFile("README.md", markdown(data));
    console.log(data);
})
}

// function call to initialize program
init();
