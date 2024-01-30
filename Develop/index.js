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
    message: 'Please provide contribution guidlines for your users.'
    },
    {
    name: 'testIns',
    message: 'Please provide test instructions for your users.'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Please select which license the application is covered under.',
    choices: 
        [
            'Other'
        ]
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

    return `# ${answers.title}\n\n${answers.names} contributed to this project.\n\n## Application Description\n\n${answers.desc}\n\n## Installation Instructions\n\n ${answers.instalIns}\n\n## Usage Info\n\n ${answers.usageInfo}\n\n## Contribution Guidlines\n\n ${answers.guidlines}\n\n## Testing Instructions\n\n ${answers.testIns}\n\n${answers.license}\n\n ### Questions? Learn more [here](https://www.github.com/${answers.github})\n\n### Email:${answers.email}`;

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
