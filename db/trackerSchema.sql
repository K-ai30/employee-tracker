-- Drops the programming_db if it already exists 
DROP DATABASE IF EXISTS employee_trackerDB;

-- Created the DB "employee_trackerDB" (only works on local connections)
CREATE DATABASE employee_trackerDB;

-- Use the DB employee_trackerDB for all the rest of the script
USE employee_trackerDB;

-- Created the table "department"
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
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
  FOREIGN KEY(role_id) references role(id),
  manager_id INT,
  PRIMARY KEY(id)
);

