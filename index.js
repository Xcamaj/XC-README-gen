// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log("Project name required!")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe the project in detail.',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log("Project description required!")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Table of Contents.'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What installations are required to run this app?',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log("If no installations are required please enter 'N/A'.")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Give Instructions on running the app.',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log("Provide the user with instructions on how use the app!")
                return false
            }
        }  
    },
    {
        type: 'list',
        message: 'What license is being used?',
        name: 'License',
        choices: ['Apache 2.0', 'BSD 3-Clause', 'GNU', 'MIT', 'Mozilla', 'Eclipse'],    
         validate: value => {
            if (value) {
                return true
            } else {
                console.log("Please check what license was used!")
                return false
            }
        }  
    },
    {
        type: 'input',
        name: 'Username',
        message: 'Enter your Github username.',
         validate: value => {
            if (value) {
                return true
            } else {
                console.log("Please provide a username!")
                return false
            }
        }  
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email address.',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log("Please provide an email!")
                return false
            }
        }          
    }

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

//Function call to initialize app
init();