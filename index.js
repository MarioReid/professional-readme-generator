// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage?", 
    },
    {
        type: "input",
        name: "contributing",
        message: "Please indicate the contributors of this project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test?"
    },
    {   
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
            "MIT",
            "Apache",
            "None"]
    },
    {
        type: "input",
        name: "questions",
        message: "What issue did you have? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
    type: "input",
    name: "email",
    message: "Please enter your email: "
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        
    const generatedText = generateMarkdown(userAnswers);
    
        // write the output file
        fs.writeFile('README.md', generatedText, () => {
            console.log('Write success!')
        })
    })
}



// Function call to initialize app
init();
