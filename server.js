require('dotenv').config();

const fs = require("fs");
const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("table");
const CFonts = require("CFonts");
const chalk = require("chalk");

CFonts.say('Employee Tracker', {
    font: 'chrome',             // define the font face
    align: 'left',              // define text alignment
    colors: ['blue', "green", "#A73CFF"],           // define all colors
    // background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    // letterSpacing: 1,           // define letter spacing
    // lineHeight: 2,              // define the line height
    // space: true,                // define if the output text should have empty lines on top and on the bottom
    // maxLength: '0',             // define how many character can be on one line
    // gradient: false,            // define your two gradient colors
    // independentGradient: false, // define if you want to recalculate the gradient for each new line
    // transitionGradient: false,  // define if this is a transition between colors directly
    env: 'node'                 // define the environment CFonts is being executed in
});

const connection = mysql.createConnection({
  host: "localhost",

  // Port; if not 3306
  port: process.env.PORT,

  // Your username
  user: "root",

  // Your password
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

fs.readFile("./db/trackerSeeds.sql", function read(err, res) {
    console.log(err);
    console.log(res);
    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
    
        connection.query("
        INSERT INTO department (name) VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal")",(err, results) => {
            if (err) throw err;
            
            console.log(results);
        })
    })
})

const mainQuestions = [
    {
        message:  "What would you like to do?"
    },
]
