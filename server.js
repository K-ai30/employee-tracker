const fs = require("fs");
const inquirer = require("inquirer");
const connection = require("./db/trackerDBConnection");
const table = require("console.table");
const CFonts = require("CFonts");
const chalk = require("chalk");

CFonts.say('Employee Tracker', {
    font: 'chrome',             // define the font face
    align: 'center',              // define text alignment
    colors: ['blue', "green", "#A73CFF"], // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
    gradient: true,             // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: true,  // define if this is a transition between colors directly
    env: 'node'                 // define the environment CFonts is being executed in
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // Calling runStart function ONLY AFTER the connection to database was successful.
    runStart();
});

function runStart() {
    // Run an inquirer prompt to ask for the user's desired action
    inquirer
     .prompt({
        type: "list",
        name: "trackerChoice",
        message: "What would you like to do?",
        choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role"
        ]
        })
        .then(answers => {
        // Based on the selected action, call one of our functions to query the database
        // console.log('Answers: ', answers);
        switch(answers.trackerChoice) {
            case "View Departments":
            viewDepartments();
            break;

            case "View Roles":
            viewRoles();
            break;
                            
            case "View Employees":
            viewEmployees();
            break;
                                
            case "Add Department":
            addDepartment();
            break;

            case "Add Role":
            addRole();
            break;
                            
            case "Add Employee":
            addEmployee();
            break;
                            
            case "Update Employee Role":
            updateEmployeeRole();
            break;
            }
        })
}

// View
function viewDepartments() {
    // console.log("Departments Function");
    let query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        // console.log(res);
        console.table(chalk.cyan("All Departments:"), res);
        runStart();
    });
};

function viewRoles() {
    // console.log("Roles Function");
    let query = "SELECT * FROM role";
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        // console.log(res);
        console.table(chalk.magenta("All Roles:"), res);
        runStart();
    });
};

function viewEmployees() {
    // console.log("Employees Function");
    let query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        // console.log(res);
        console.table(chalk.green("All Employees:"), res);
        runStart();
    });
};

// ADD
function addDepartment() {
    //Whats the name of the department?
    inquirer
    .prompt({
       type: "input",
       name: "departmentName",
       message: "What is the name of the department?"
   }).then(answers => {
        //insert into departments
        let query = "INSERT INTO department (name) VALUES (?)"
        connection.query(query, answers.departmentName, (err, results) => {
            console.log("Name added!");
            runStart();
        })
    })
};

function addRole() {
    connection.query("SELECT * FROM department", (err, results) => {
        //now we have access to department names and id's everywhere in this function 
        //via our 'results' variable
        //maybe before we prompt we display the names of the departments using 'results'
       // console.log(results.map(department =>  {return {name:department.name, value: department.id}}));
        inquirer
         .prompt([{
            type: "input",
            name: "title",
            message: "What is the name of the role?"
        },
        {
            type: "list",
            name: "department",
            choices: results.map(department =>  {return {name:department.name, value: department.id}}),
            message: "What department is it?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary?"
        }]
        )
        .then(answers => {
            let query = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
            connection.query(query, [answers.title, answers.salary, answers.department], (err, results) => {
                if (err) {
                    console.log(err, "error!");
                }
                console.log("Role Added!");
                runStart();
            })
        })
    });
}

function addEmployee() {
    //What's the employee's last name?
    //first name? 
    //role_id - display a list 
    //manager? (either ask for manager name or id)
    connection.query("SELECT * FROM role", (err, results) => {
        inquirer
         .prompt([{
            type: "input",
            name: "firstName",
            message: "What is their first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is their last name?"
        },
        {    
            type: "list",
            name: "role",
            choices: results.map(role =>  {return {name:role.title, value:role.id}}),
            message: "What is their role?"
        }]
        )
        .then(response => {
            connection.query("SELECT * FROM employee", (err, results) => {
                inquirer
                 .prompt([{
                    type: "list",
                    name: "manager",
                    choices: results.map(employee =>  {return {name:employee.first_name + " " + employee.last_name, value: employee.id}}),
                    message: "Who is their manager?"
                }]
                )
                .then(answers => {
                    let query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
                    connection.query(query, [response.firstName, response.lastName, response.role, answers.manager], (err, results) => {
                        if (err) {
                            console.log(err, "error!");
                        }
                        console.log("Employee Added!");
                        runStart();
                    })
                })
            })
        })
    })
}

// Update employee role
function updateEmployeeRole() {
    connection.query("SELECT * FROM employee", (err, results) => {
        inquirer.prompt([{
            // UPDATE employee
            type: "list",
            name: "employee",
            choices: results.map(employee => {return {name:employee.first_name + " " + employee.last_name, value: employee.id}}),
            message: "Which employee needs a new role?"
        }]).then(response => {
            connection.query("SELECT * FROM role", (err, results) => {
                inquirer.prompt([{
                    // UPDATE employee
                    type: "list",
                    name: "role",
                    choices: results.map(role =>  {return {name:role.title, value:role.id}}),
                    message: "What is their new role?"
                }]).then(answers => {
                    connection.query("UPDATE employee SET role_id = ? WHERE  id = ? ", [answers.role, response.employee], (err, results) => {
                        if (err) {
                            console.log(err, "error!");
                        }
                        console.log("Employee Role Updated!");
                        runStart();
                    })
                })
            })
        })
    })
}