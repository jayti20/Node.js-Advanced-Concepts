const mysql = require("mysql2");
// Create connection object
const connection = mysql.createConnection({
  // Configuration object
  host: "localhost",
  user: "root",
  password: "Ananya17$",
  database: "demo",
});
// console.log(connection);

// Verify successful connection to db
connection.connect((err) => {
  if (err) throw err;
  console.log("Connection to the database is successful!");
});

// Verify successful connection to db
connection.connect((err) => {
  if (err) throw err;

  // Writing a query to create database.
  // connection.query("CREATE DATABASE DEMO", (err, result) => {
  //   if (err) throw err;
  //   console.log("Database created successfully!");
  // });

  // Creating Table in Database Demo
  // const createTableQuery =
  //   "create table customers(name Varchar(300), address Varchar(300))";
  // connection.query(createTableQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("Table created successfully!");
  // });

  // Inserting data into the table customers
  // const insertDataInCustomerTable =
  //   "Insert into customers(name,address) Values('Jayti','Bangalore')";
  // connection.query(insertDataInCustomerTable, (err, res) => {
  //   if (err) throw err;
  //   console.log("User data inserted successfully in customer table.");
  // });

  // Inserting an array of data into the table customers
  // const userDataArray = [
  //   ["John Doe", "New York"],
  //   ["Jane Smith", "Los Angeles"],
  //   ["Alice Johnson", "Chicago"],
  //   ["Bob Brown", "Houston"],
  //   ["Charlie Davis", "Phoenix"],
  // ];
  // const insertMultipleUserDataQuery =
  //   "Insert into customers(name,address) Values ?";
  // connection.query(insertMultipleUserDataQuery, [userDataArray], (err, res) => {
  //   if (err) throw err;
  //   console.log("Array of user data inserted successfully!");
  // });

  // View customers table data
  // const viewCustomerDataQuery = "Select * from customers";
  // connection.query(viewCustomerDataQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("CUSTOMERS TABLE DATA", res);
  // });

  // View name entry from customers table
  // const viewCustomersNameQuery = "Select name from customers";
  // connection.query(viewCustomersNameQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("CUSTOMERS NAME DATA", res);
  // });

  // Where Statement
  // const viewUserWithSpecificAddressQuery =
  //   "Select name from customers where address='Phoenix'";
  // connection.query(viewUserWithSpecificAddressQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("CUSTOMERS WITH ADDRESS PHOENIX", res);
  // });

  // Delete specific user data
  // const deleteSpecificUserDataQuery =
  //   "Delete from customers where address='Phoenix'";
  // connection.query(deleteSpecificUserDataQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("CUSTOMERS TABLE DATA AFTER DELETION", res);
  // });

  // Update data of a specific user.
  // const updateDataOfSpecificUserQuery =
  //   "Update customers set name='Martin' where address='Bangalore'";
  // connection.query(updateDataOfSpecificUserQuery, (err, res) => {
  //   if (err) throw err;
  //   console.log("CUSTOMERS TABLE DATA AFTER UPDATION", res);
  // });
});
