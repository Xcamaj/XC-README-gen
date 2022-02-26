const inquirer = require('inquirer')
const fs = require('fs')
const index = require('../index')

function renderLicenseLink(License) {
    let link = ''
    if (License === 'Apache 2.0') {
        link = 'https://www.apache.org/licenses/LICENSE-2.0'
    } else if (License === 'BSD 3-Clause') {
        link = 'https://opensource.org/licenses/BSD-3-Clause'
    } else if (License === 'GNU') {
        link = 'https://www.gnu.org/licenses/licenses.en.html'
    } else if (License === 'MIT') {
        link = 'https://opensource.org/licenses/MIT'
    } else if (License === 'Mozilla') {
        link = 'https://www.mozilla.org/en-US/MPL/'
    } else if (License === 'Eclipse') {
        link = 'https://www.eclipse.org/legal/epl-v10.html'
    } else {
        link = ''
    }
    return link
}

function renderLicenseBadge(License) {
    let badge = ''
    if (License === 'Apache 2.0') {
        badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    } else if (License === 'BSD 3-Clause') {
        badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    } else if (License === 'GNU') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else if (License === 'MIT') {
        badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (License === 'Mozilla') {
        badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    } else if (License === 'Eclipse') {
        badge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)'
    } else {
        badge = ''
    }
    return badge
}

function renderLicenseSection(License) {
    let licenseSection = ''
    if (License === 'None') {
        licenseSection = ''
    } else {
        licenseSection = `## License: ${License}`
    }
    return licenseSection
}


function generateMarkdown(data) {
    return `# ${data.Title}

## Description
${data.Description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)

## Installation
${data.Installation}

## Usage 
${data.Usage}

${renderLicenseSection(data.License)} ${renderLicenseBadge(data.License)}
${renderLicenseLink(data.License)}

## Contributors
${data.Contributors}

## Questions
For any questions please reach out at:
* Github: [github.com/${data.Username}](https://github.com/${data.Username})
* E-mail: ${data.Email}

`;
}


module.exports = generateMarkdown;
