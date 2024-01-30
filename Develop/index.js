// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
    name: 'names',
    message: 'What are the names of the contributors?'
    },
    {
    type: 'list',
    name: 'industry',
    message: 'What industry is this project most applicable to?',
    choices: 
        [
            'Information Technology',
            'Healthcare',
            'Finance',
            'Education',
            'Retail',
            'Manufacturing',
            'Hospitality',
            'Telecommunications',
            'Automotive',
            'Agriculture',
            'Media',
            'Energy',
            'Other'
        ],
    },
    {
    name: 'desc',
    message: 'Please provide a description of your project.'
    },
        {
    name: 'instalIns',
    message: 'Please provide install instructions for your users.'
    },
    {
    name: 'usageInfo',
    message: 'Please provide usage information for your users.'
    },
    {
    name: 'guidelines',
    message: 'Please provide contribution guidelines for your users.'
    },
    {
    name: 'testIns',
    message: 'Please provide test instructions for your users.'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Please select which license the application is covered under.',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'Other'],
    },
    {
    name: 'github',
    message: 'Please enter your GitHub username.'
    },
    {
    name: 'email',
    message: 'Please enter your email address.'
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>

    err ? console.error(err) : console.log('README.md generated') 

);
}
function generateReadme(answers) {

    const licenseBadge = `![License Badge](https://img.shields.io/badge/${answers.license}-brightgreen)`;
    return `# ${answers.title}\n\n${licenseBadge}\n\n${answers.names} contributed to this project.\n\n**Important Notice:** This project is released under the ${answers.license} license.\n\n## Table of Contents
- [Application Description](#application-description)
- [Installation Instructions](#installation-instructions)
- [Usage Info](#usage-info)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Instructions](#testing-instructions)
- [Questions](#questions)
\n\n### Application Description\n\n${answers.desc}\n\n### Installation Instructions\n\n${answers.instalIns}\n\n### Usage Info\n\n${answers.usageInfo}\n\n### Contribution Guidelines\n\n${answers.guidelines}\n\n### Testing Instructions\n\n${answers.testIns}\n\n#### Questions?\n\nPlease email me at [${answers.email}](mailto:${answers.email})Link to my [Github](https://www.github.com/${answers.github})`;
}


// Create a function to initialize app
function startReadMeGenerator() {
    inquirer.prompt(questions)
    .then((answers) => {

      const readmeContent = generateReadme(answers); //generates the readME content using the answers object

      writeToFile('generatedREADME.md', readmeContent); // defines file name and writes all the info in
    })
    .catch((error) => console.error(error)); //triggers if theres an error
}

startReadMeGenerator();
