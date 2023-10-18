const mysql = require("mysql2");

// Create connection object with configuration
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ananya17$",
  database: "demo",
});

// Verify successful connection to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to the database is successful!");
});

// Uncomment the sections below to perform the corresponding database operations:

/*
// Writing a query to create a database
connection.query("CREATE DATABASE DEMO", (err, result) => {
  if (err) throw err;
  console.log("Database created successfully!");
});

// Creating a table in the 'demo' database
const createTableQuery = "CREATE TABLE customers(name VARCHAR(300), address VARCHAR(300))";
connection.query(createTableQuery, (err, res) => {
  if (err) throw err;
  console.log("Table created successfully!");
});

// Inserting data into the 'customers' table
const insertDataInCustomerTable = "INSERT INTO customers(name, address) VALUES('Jayti', 'Bangalore')";
connection.query(insertDataInCustomerTable, (err, res) => {
  if (err) throw err;
  console.log("User data inserted successfully in the customer table.");
});

// Inserting an array of data into the 'customers' table
const userDataArray = [
  ["John Doe", "New York"],
  ["Jane Smith", "Los Angeles"],
  ["Alice Johnson", "Chicago"],
  ["Bob Brown", "Houston"],
  ["Charlie Davis", "Phoenix"],
];
const insertMultipleUserDataQuery = "INSERT INTO customers(name, address) VALUES ?";
connection.query(insertMultipleUserDataQuery, [userDataArray], (err, res) => {
  if (err) throw err;
  console.log("Array of user data inserted successfully!");
});

// Viewing all data from the 'customers' table
const viewCustomerDataQuery = "SELECT * FROM customers";
connection.query(viewCustomerDataQuery, (err, res) => {
  if (err) throw err;
  console.log("CUSTOMERS TABLE DATA", res);
});

// Viewing only the names from the 'customers' table
const viewCustomersNameQuery = "SELECT name FROM customers";
connection.query(viewCustomersNameQuery, (err, res) => {
  if (err) throw err;
  console.log("CUSTOMERS NAME DATA", res);
});

// Using the WHERE clause to select specific data
const viewUserWithSpecificAddressQuery = "SELECT name FROM customers WHERE address='Phoenix'";
connection.query(viewUserWithSpecificAddressQuery, (err, res) => {
  if (err) throw err;
  console.log("CUSTOMERS WITH ADDRESS PHOENIX", res);
});

// Deleting a specific user's data
const deleteSpecificUserDataQuery = "DELETE FROM customers WHERE address='Phoenix'";
connection.query(deleteSpecificUserDataQuery, (err, res) => {
  if (err) throw err;
  console.log("CUSTOMERS TABLE DATA AFTER DELETION", res);
});

// Updating data for a specific user
const updateDataOfSpecificUserQuery = "UPDATE customers SET name='Martin' WHERE address='Bangalore'";
connection.query(updateDataOfSpecificUserQuery, (err, res) => {
  if (err) throw err;
  console.log("CUSTOMERS TABLE DATA AFTER UPDATION", res);
});
*/
