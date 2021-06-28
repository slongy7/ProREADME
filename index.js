// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions for your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        message: 'What is the license your application is covered under?',
        name: 'license',
        choices: ['MIT', 'IBM', 'SIL', 'none'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMePageContent = generateMarkdown(answers);
    
        fs.writeFile('README.md', readMePageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });
}

// Function call to initialize app
init();
