// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
    name: 'title',
    message: 'What is the title of your project?'
    },
]

// Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>

    err ? console.error(err) : console.log('README.md generated') 

);
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
