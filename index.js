const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: 'kayaBear42!',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);

inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'View all departments',
                value: 'view_departments'
            },
            {
                name: 'View all roles',
                value: 'view_roles'
            },
            {
                name: 'View all employees',
                value: 'view_employees'
            },
            {
                name: 'Add a department',
                value: 'add_department'
            },
            {
                name: 'Add a role',
                value: 'add_role'
            },
            {
                name: 'Add an employee',
                value: 'add_employee'
            },
            {
                name: 'Update an employee role',
                value: 'update_employee'
            }
        ]
    }
]).then(answers => {
    switch (answers) {
        case 'View all departments':
            console.log(options.value);
            break;

        case 'View all roles':
            viewRoles();
            break;

        case 'View all employees':
            viewEmployees();
            break;

        case 'Add a department':
            addDepartment();
            break;

        case 'Add a role':
            addRole();
            break;

        case 'Add an employee':
            addEmployee();
            break;

        case 'Update an employees role':
            updateEmployee();
            break;

        default: process.exit();

    }
});

function viewDepartments(table) {
    //show table of departments
    console.table([
        `SELECT * FROM departments`
    ]);
};

function addDepartment() {
    inquirer.prompt([
        {}
    ])
}