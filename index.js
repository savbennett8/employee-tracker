const mysql = require('mysql2/promise');
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

//original prompt questions asking what the user wants to do
function prompts() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employees manager']
        }
    ]).then(answers => {
        switch (answers.options) {
            case 'View all departments':
                viewDepartments();
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

            case 'Update an employees manager':
                updateEmployeeManager();
                break;

            default: process.exit();

        }
    });
};

prompts();

function viewDepartments() {
    //show table of departments
    db.query(
        'SELECT * FROM departments ORDER BY id ASC',
        function (err, results) {
            console.table(results);
            //return to original prompts
            prompts();
        }
    );

};

function viewRoles() {
    //show table of roles
    db.query(
        `SELECT * FROM roles ORDER BY id ASC`,
        function (err, results) {
            console.table(results);
            //return to original prompts
            prompts();
        }
    );
};

function viewEmployees() {
    //show table of employees
    db.query(
        `SELECT * FROM employees ORDER BY id ASC`,
        function (err, results) {
            if (err) {
                console.log(err);
            }
            console.table(results);
            //return to original prompts
            prompts();
        }
    );
};

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Enter the department name:'
        }
    ]).then(newDepartment => {
        // add newDepartment to department's table
        db.query(
            `INSERT INTO departments SET ?`, { department_name: newDepartment.addDepartment },
            function (err, results) {
                if (err) {
                    console.log(err);
                }
                db.query(
                    `SELECT * FROM departments ORDER BY id ASC`,
                    function (err, results) {
                        console.table(results);
                        prompts();
                    }
                );
            }

        );
    })
};

function addRole() {
    //inquirer prompt asking for job_title, salary, & department_id
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            messsage: 'What is the role title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary for this role:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department id number:'
        }
    ]).then(newRole => {
        // add newRoles to role's table
        db.query(
            `INSERT INTO roles SET ?`, { job_title: newRole.title, salary: newRole.salary },
            function (err, results) {
                if (err) {
                    console.log(err);
                }
                db.query(
                    `SELECT * FROM roles ORDER BY id ASC`,
                    function (err, results) {
                        console.table(results);
                        prompts();
                    }
                );
            }

        );
    })

};

function addEmployee() {
    //inquirer prompt asking for first_name, last_name, job_title, role_id, manager_name
    inquirer.prompt([
        {
            type: 'input',
            messsage: 'Enter employee first name:',
            name: 'first_name'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter employee last name:'
        },
        {
            type: 'input',
            name: 'job_title',
            message: 'Enter employee job title:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role id number: '
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Enter manager name:'
        }
    ]).then(newEmployee => {
        // add newEmployee to employee's table
        db.query(
            `INSERT INTO employees SET ?`, { first_name: newEmployee.first_name, last_name: newEmployee.last_name, job_title: newEmployee.job_title, manager_name: newEmployee.manager },
            function (err, results) {
                if (err) {
                    console.log(err);
                }
                db.query(
                    `SELECT * FROM employees ORDER BY id ASC`,
                    function (err, results) {
                        console.table(results);
                        prompts();
                    }
                );
            }
        );
    });
};

function updateEmployeeManager() {
    //inquirer prompt asking which employee to update
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee_list',
            message: 'Select the employee you would like to update:',
            choices: [
                db.query(
                    `SELECT first_name FROM employees`
                )
            ]
        }
    ]).then(selectedEmployee => {
        //inquirer prompt asking which manager to assign
        inquirer.prompt([
            {
                type: 'list',
                name: 'manager_list',
                message: 'Select the manager to assign to the selected employee:',
                choices: ['Ashley Rodriguez', 'Sarah Blue', 'Rich Knutz', 'Don Joe']
            }
        ]).then(selectedManager => {
            //somehow update employee with new manager in employees table
        })
    })


}