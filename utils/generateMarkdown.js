const inquirer = require('inquirer')
const fs = require('fs')
const index = require('../index')
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}

## Description
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)

## Installation
${data.Installation}

## Usage 
${data.Usage}

## License
${data.License}

## Contact
* Github: [github.com/${data.Username}](https://github.com/${data.Username})
* E-mail: ${data.Email}

`;
}


module.exports = generateMarkdown;
