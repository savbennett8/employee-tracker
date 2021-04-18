INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (job_title, department_name, salary)
VALUES 
('Sales Lead', 'Sales', 100000),
('Salesperson', 'Sales', 10000),
('Lead Engineer', 'Engineering', 150000),
('Software Engineer', 'Engineering', 120000),
('Accountant', 'Finance', 125000),
('Legal Team Lead', 'Legal', 250000),
('Lawyer', 'Legal', 150000);

INSERT INTO employees (first_name, last_name, job_title, department_name, salary, manager)
VALUES 
('John', 'Doe', 'Sales Lead', 'Sales', 100000, 'Ashley Rodriguez'),
('Mark', 'Hathaway', 'Salesperson', 'Sales', 10000, 'Ashley Rodriguez'),
('Sarah', 'Blue', 'Lead Engineer', 'Engineering', 150000, null),
('Tegan', 'Atkins', 'Software Engineer', 'Engineering', 120000, 'Sarah Blue'),
('Rich', 'Knutz', 'Accountant', 'Finance', 125000, null),
('Louis', 'Dunn', 'Legal Team Lead', 'Legal', 250000, 'Don Joe'),
('Kristen', 'Barnes', 'Lawyer', 'Legal', 150000, 'Don Joe');
