require('dotenv').config();

const mysql = require("mysql");

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

  connection.connect(function(err) {
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
      // Calling runStart function ONLY AFTER the connection to database was successful.
      runStart();
  });

  module.exports = connection;