const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const fs = require('fs');

const generatePage = require('./src/generate-page.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');








const promptManager = async () => {
    const { name, employeeId, email, officeNumber } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?',

        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your Employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your e-mail address'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        },

    ]);

    return new Manager(name, employeeId, email, officeNumber);
};

const shouldAddNewMember = async () => {
    const { shouldAddMember } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'shouldAddMember',
            message: 'Would you like to add a new member?',
            default: false
        }
    ])
    return shouldAddMember;
}

const promptGetMemberRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role is the new member?',
            choices: ['Engineer', 'Intern']
        }
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
            type: 'input',
            name: 'Id',
            message: 'Enter your employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },

    ]);
};

const promptEngineer = async () => {
    const {name, Id, email} = await promptMember();
    const {github } = await inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username',
        }
    ]);
    return new Engineer(name, Id, email, github);
};

const promptIntern = async () => {
    const {name, Id, email} = await promptMember();
    const { school } = await inquirer.prompt([
        {
            type: 'input',
            name: 'schoolName',
            message: 'Enter your school name',
        }
    ]);
    return new Intern (name, Id, email, school);
}

const getAdditionalEmployees = async () => {
    const employees = [];
    while (await shouldAddNewMember()){
        let employee 
        const {role} = await promptGetMemberRole();
        switch(role){
            case 'Engineer':
                employee = await promptEngineer();
                break;
            case 'Intern':
                employee = await promptIntern();
                break;
            default:
        }
        employees.push(employee);
    }   
    return employees;

}

async function getEmployees(){
    const employees = [];
    employees.push(await promptManager())
    employees.push(...(await getAdditionalEmployees()))

    return employees;
} 

async function main () {
    const pageHTML = generatePage(await getEmployees())

    fs.writeFile('./index.html', pageHTML, err => {
        if (err) throw err;

        console.log('Portfolio complete! Check out index.html to see the output!');
    });
}

main();
//askQuestions();

