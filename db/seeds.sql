INSERT INTO employees
  (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'James', 'Fraser', 2, 1),
  (2, 'Jack', 'London', 4, 5),
  (3, 'Robert', 'Bruce', 4, 5),
  (4, 'Peter', 'Greenaway', 4, 12),
  (5, 'Derek', 'Jarman', 3, 12),
  (6, 'Paolo', 'Pasolini', 5, 5),
  (7, 'Heathcote', 'Williams', 1, 12),
  (8, 'Sandy', 'Powell', 5, 5),
  (9, 'Emil', 'Zola', 4, 5),
  (10, 'Sissy', 'Coalpits', 1, 1),
  (11, 'Antoinette', 'Capet', 3, 12),
  (12, 'Samuel', 'Delany', 6, 5),
  (13, 'Tony', 'Duvert', 3, 12),
  (14, 'Dennis', 'Cooper', 4, 5),
  (15, 'Monica', 'Bellucci', 4, 5),
  (16, 'Samuel', 'Johnson', 6, 5);

INSERT INTO departments
  (id, department_name)
VALUES
  (1, "Administration"),
  (2, "Animals");

INSERT INTO roles
  (id, title, salary, department_id)
VALUES
  (1, 'director', 50000.00, 1),
  (2, 'registrar', 40000.00, 1),
  (3, 'secretary', 30000.00, 1),
  (4, 'handler', 40000.00, 2),
  (5, 'veternarian', 80000.00, 2),
  (6, 'veternary technician', 40000.00, 2);