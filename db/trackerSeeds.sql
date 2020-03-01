-- Use the DB employee_trackerDB for all the rest of the script
USE employee_trackerDB;

-- ### Alternative way to insert more than one row

-- Departments Table data
INSERT INTO department
    (name)
VALUES 
    ("Managment"),
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Administration"),
    ("Legal");

-- Role Table data
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Chief Executive Officer", 300000, 1),
    ("Director", 200000, 1),
    ("Team Captain", 150000, 2),
    ("IT Manager", 120000, 3),
    ("Cyber Security Officer", 100000, 3),
    ("Web Developer", 70000, 3),
    ("Controller", 80000, 4),
    ("Executive Assistant", 50000, 5),
    ("In-House Council", 100000, 6),
    ("Visitng Council", 150000, 6);

-- Employee Table data
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Stan", "Lee", 1, NULL),
    ("Nick", "Fury", 2, NULL),
    ("Captain", "America", 3, 2),
    ("Iron", "Man", 4, 3),
    ("Black", "Widow", 5, 3),
    ("Spider-", "Man", 6, 3),
    ("Wanda", "Maximoff", 7, 3),
    ("Pepper", "Potts", 8, 3),
    ("Doctor", "Strange", 9, 3),
    ("Black", "Panther", 10, 3);

-- inner join