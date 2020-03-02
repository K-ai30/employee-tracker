const fs = require("fs");
const inquirer = require("inquirer");
const connection = require("./db/trackerDBConnection");
const table = require("console.table");
const CFonts = require("CFonts");
const chalk = require("chalk");

CFonts.say('Employee Tracker', {
    font: 'chrome',             // define the font face
    align: 'center',              // define text alignment
    colors: ['blue', "green", "#A73CFF"],           // define all colors
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

if (answers.roleChoice === 'Manager') {
    ManagerRole(answers);
    console.log('Manager title');
} else if (answers.roleChoice === 'Engineer') {
    EngineerRole(answers);
    console.log('Engineer title');
} else if (answers.roleChoice === 'Intern') {
    InternRole(answers);
    console.log('Intern title');
} else {
    console.log('I am done!');
}
return answers.roleChoice;
    
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // switch case or if conditions
    connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
            
    console.log(results);
    })

    connection.query("SELECT * FROM employee WHERE department_id = ?" [2], (err, results) => {
        if (err) throw err;
                
        console.log(results);
    })

    connection.query("SELECT * FROM employee WHERE manager_id = ?" [manager_id], (err, results) => {
        if (err) throw err;
                
        console.log(results);
    })
})

// const mainQuestions = [
//     {
//         type: "input",
//         message:  "What is the employees first name?"
//     },
//     {
//         type: "input",
//         message:  "What is the employees last name?"
//     },
//     {
//         message:  "What is the employees role?"
//     },
//     {
//         message:  "What is the employees role?"
//     },
// ]

// Run an inquirer prompt to ask for the user's desired action
inquirer
.prompt({
    name: "trackerChoice",
    type: "list",
    message: "What would you like to do?",
    choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Departments",
        "Add Roles",
        "Add Employee",
        "Update Employee Role"
    ]
})
.then(answers => {
    // Based on the selected action, call one of our functions to query the database
    console.log('Answers: ', answers);
    switch(answer.trackerChoice) {
        case "View Departments":
            viewDepartments();
            break;

        case "View Roles":
            viewRoles();
            break;

        case "View Employees":
            viewRoles();
            break;
            
        case "Add Departments":
            addDepartments();
            break;
        
        case "Add Roles":
            addRoles();
            break;

        case "Add Employee":
            addEmployee();
            break;

        case "Update Employee Role":
            updateEmployeeRole();
            break;
    }
});

// View
function viewDepartments() {
    
}

function viewRoles() {
    console.log("Roles Function");
}

function viewEmployees() {

}

// ADD
function addDepartment() {

}

function addRoles() {

}

function addEmployee() {

}

// UPDATE
function updateEmployeeRole() {
    // UPDATE employee
    // SET role_id = 3
    // WHERE id = 1
}
