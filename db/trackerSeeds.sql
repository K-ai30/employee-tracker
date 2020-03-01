-- Use the DB employee_trackerDB for all the rest of the script
USE employee_trackerDB;

INSERT INTO employee 
    (first_name, last_name, title, role_id, manager_id)
VALUES 
    ("Captain", "America", "Team Captain", 1, 2),
    ("Iron", "Man", "IT Manager", 1, 2),
    ("Black", "Widow", "Cyber Security Officer", 1, 2),
    ("Doctor", "Strange", "In-House Council", 1, 2),
    ("Spider-", "Man", "Web Developer", 1, 2);

-- ### Alternative way to insert more than one row

INSERT INTO department 
    (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Team Captain", 100000, 1),
    ("IT Manager", 100000, 1),
    ("Cyber Security Officer", 100000, 1),
    ("In-House Council", 100000, 1),
    ("Web Developer", 100000, 1);




-- inner join
-- 