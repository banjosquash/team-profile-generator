const inquirer = require('inquirer');

// const fs = require ('fs');

// const generatePage = require('./src/generate-page.js');

// const pageHTML = generatePage(teamMember, memberRole)

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });




const promptManager = () => {
   

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',
            
        },
        {
            type: 'input',
            name: 'Employee ID',
            message: 'Enter your Employee ID'
        },
        {
            type: 'input',
            name: 'e-mail',
            message: 'Enter your e-mail address'
        },
        {
            type: 'input',
            name: 'Office number',
            message: 'What is your office number?'
        },
        {
            type: 'confirm',
            name: 'confirmAddProfile',
            message: 'Would you like to enter another team member?',
            default: false
        },
        // {
        //     type: 'checkbox',
        //     name: 'new member',
        //     message: 'What role is the new member?',
        //     choices: ['Engineer', 'Intern']
        // }
    ]);
};
const promptMember = () => {
   

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name.'
        },
        {
            type: 'rawlist',
            name: 'role',
            message: 'Select the member role:',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Enter your employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your Github username',
        }
    ]);
};

   promptManager()
   .then(promptEngineer)