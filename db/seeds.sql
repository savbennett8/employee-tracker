INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (job_title, salary, department_id)
VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 10000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 150000, 4);

INSERT INTO employees (first_name, last_name, job_title, role_id, manager_id)
VALUES 
('John', 'Doe', 'Sales Lead', 1, 1),
('Mark', 'Hathaway', 'Salesperson', 2, 1),
('Sarah', 'Blue', 'Lead Engineer', 3, null),
('Tegan', 'Atkins', 'Software Engineer', 4, 3),
('Rich', 'Knutz', 'Accountant', 5, null),
('Louis', 'Dunn', 'Legal Team Lead', 6, 1),
('Kristen', 'Barnes', 'Lawyer', 7, 1);
