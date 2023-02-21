const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

inquirer.prompt([
    {
        type: 'input',
        message: 'Project name: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? (Optional)',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose your license for your project.',
        name: 'license',
        choices: [
            { value: 'Apache' },   //Apache 2.0 License
            { value: 'BSD3' },  //BSD 3-Clause License
            { value: 'LGPL' },  //GNU LGPL v3
            { value: 'MIT' },  //The MIT License
            { value: 'MPL' }, //Mozilla Public License 2.0
            { value: 'None' }, 
        ]
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to your project (Optional).',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide tests for project, and explain how to test (Optional).',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Do you have any question?(Optional).',
        name: 'questions',
    },
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    }

])
    .then((data) => {
        const filename = data.title.replace(' ', "").toLowerCase()
        fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
            err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
    })

function init() { }

init();