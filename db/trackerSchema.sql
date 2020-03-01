-- Drops the programming_db if it already exists
-- Only for development (not best practices)
DROP DATABASE IF EXISTS employee_trackerDB;

-- Created the DB "employee_trackerDB" (only works on local connections)
CREATE DATABASE employee_trackerDB;

-- Use the DB employee_trackerDB for all the rest of the script
USE employee_trackerDB;

-- Created the table "department"
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name varchar(30) UNIQUE NOT NULL
);

-- Created the table "role"
CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal(14,2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY(department_id) references department(id),
  PRIMARY KEY(id)
);

-- Created the table "employee"
CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY(role_id) references role(id),
  FOREIGN KEY(manager_id) references employee(id),
  PRIMARY KEY(id)
);

