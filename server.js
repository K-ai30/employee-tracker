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
    console.log("Departments Function");
    let query = "SELECT * FROM department";
}

function viewRoles() {
    console.log("Roles Function");
    let query = "SELECT * FROM role";
}

function viewEmployees() {
    console.log("Employees Function");
    let query = "SELECT * FROM employee";
}

// ADD
function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

// Update employee role
function updateEmployeeRole() {
    // UPDATE employee
    // SET role_id = 3
    // WHERE id = 1
}



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