const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./departmentRoutes'));


const promptUser = () => {
    console.log(`
=================
Add a Department
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the department? (Required)',
            validate: departmentNameInput => {
                if (departmentNameInput) {
                    return true;
                } else {
                    console.log('Please enter a department!');
                    return false;
                }
            }
        },
    ])
};

const promptRole = () => {
    console.log(`
=================
Add a Role
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the role? (Required)',
            validate: roleNameInput => {
                if (roleNameInput) {
                    return true;
                } else {
                    console.log('Please enter a role!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the roles salary? (Required)',
            validate: roleSalaryInput => {
                if (roleSalaryInput) {
                    return true;
                } else {
                    console.log('Please enter a salary!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'Enter your roles deparment (Required)',
            validate: roleDepartmentInput => {
                if (roleDepartmentInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
    ])
};

const promptEmployee = () => {
    console.log(`
=================
Add an Employee
=================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'What is the employees first name? (Required)',
            validate: employeeFirstNameInput => {
                if (employeeFirstNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'What is the employees last name? (Required)',
            validate: employeeLastNameInput => {
                if (employeeLastNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: 'Enter your employees role (Required)',
            validate: employeeRoleInput => {
                if (employeeRoleInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Enter your employees manager (Required)',
            validate: employeeManager => {
                if (employeeManager) {
                    return true;
                } else {
                    console.log('You need to enter an office number!');
                    return false;
                }
            }
        },
    ])
};

const whatWouldYouLikeToDoNext = userInput => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'nextOption',
                message: 'Would you like to...',
                choices: [
                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "Update an Employee's Role"
                ],
            }
        ]);
};

const doNext = async () => {
    let next = await whatWouldYouLikeToDoNext();
    if (next.nextOption === 'View All Departments') {
        doNext();
    }
    if (next.nextOption === 'View All Roles') {
        doNext();
    }
    if (next.nextOption === 'View All Employees') {
        doNext();
    }
    if (next.nextOption === 'Add a Department') {
        let departmentResponses = await promptDepartment();
        doNext();
    };
    if (next.nextOption === 'Add a Role') {
        let roleResponses = await promptRole();
        doNext();
    }
    if (next.nextOption === 'Add an Employee') {
        let employeeResponses = await promptEmployee();
        doNext();
    };
};

promptUser()
    .then(async userInput => {
    doNext()
    });

module.exports = router;