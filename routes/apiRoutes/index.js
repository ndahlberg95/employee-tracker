const express = require('express');
const router = express.Router();

router.use(require('./employeeRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./departmentRoutes'));

module.exports = router;


//BELOW IS SQL COMMANDS TO BUILD DATABSE/TABLES

//CREATE DATABASE company;
//USE company;

// CREATE TABLE employees (
//     id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     first_name VARCHAR(30) NOT NULL,
//     last_name VARCHAR(30) NOT NULL,
//     role VARCHAR(30) NOT NULL,
//     manager INTEGER,
//     departmentID INTEGER);

// CREATE TABLE departments (
//     id INTEGER AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(30) NOT NULL);