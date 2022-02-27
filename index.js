// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ([
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
        type: 'confirm',
        name: 'Table of Contents',
        message: 'Add Table of Contents.',
        default: true
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
        choices: ['Apache 2.0', 'BSD 3-Clause', 'GNU', 'MIT', 'Mozilla', 'Eclipse', 'None'],
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Enter contributor(s)',
        validate: value => {
            if (value) {
                return true
            } else {
                console.log('Enter at least 1 contributor.')
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
const writeToFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileName, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data)
            var fileName = generateMarkdown(data)
            writeToFile(fileName)

        })
}

//Function call to initialize app
init();

module.exports = questions