const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');

db.connect(async function () {
    runINQ();
})

function runINQ() {

    const promptDepartments = () => {
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

    // const promptUpdateEmployee = async () => {
    //     console.log(`
    // =================
    // Update an Employee
    // =================
    // `);
    //     let choices = await db.employees.getEmployees();
    //     console.log(choices)
    //     return new Promise((resolve, reject) => {
    //         inquirer.prompt([
    //             {
    //                 name: "employee",
    //                 type: "list",
    //                 message: "Please select an employee to update: ",
    //                 choices: choices
    //             },
    //             {
    //                 type: 'input',
    //                 name: 'employeeNewRole',
    //                 message: 'What is the employees new role? (Required)',
    //                 validate: employeeNewRoleInput => {
    //                     if (employeeNewRoleInput) {
    //                         return true;
    //                     } else {
    //                         console.log('Please enter a new role!');
    //                         return false;
    //                     }
    //                 }
    //             },
    //         ])
    //     });
    // };


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
            const sql = `SELECT * FROM departments`;
            const queryResult = (await db.promise().query(sql))[0];
        }
        if (next.nextOption === 'View All Roles') {
            const queryResult2 = (await db.promise().query(`SELECT * FROM roles`))[0];
        }
        if (next.nextOption === 'View All Employees') {
            const queryResult3 = (await db.promise().query(`SELECT * FROM employees`))[0];
        }
        if (next.nextOption === 'Add a Department') {
            let departmentResponses = await promptDepartments();
            await db.promise().query(`INSERT INTO roles (department_name) VALUES (?)`,
                [departmentResponses.departmentName]);
        };
        if (next.nextOption === 'Add a Role') {
            let roleResponses = await promptRole();
            await db.promise().query(`INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
                [roleResponses.roleName, roleResponses.roleSalary, roleResponses.roleDepartment]);
        }
        if (next.nextOption === 'Add an Employee') {
            let employeeResponses = await promptEmployee();
            await db.promise().query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
                [employeeResponses.employeeFirstName, employeeResponses.employeeLastName, employeeResponses.employeeRole, employeeResponses.employeeManager]);
        };
        // if (next.nextOption === 'Update an Employee') {
        //     let updateEmployeeResponses = await promptUpdateEmployee();
        //     //select employee by id?
        //     await db.promise().query(`INSERT INTO employees (role_id) VALUES (?)`, 
        //         [updateEmployeeResponses.employeeNewRole]);
        // };
        doNext();
    };

    doNext()
};

process.on("SIGINT", function () {
    console.log("Program is exitting!");
    db.destroy()
})