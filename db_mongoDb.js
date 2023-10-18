// Importing the MongoClient class from the 'mongodb' module
const { MongoClient } = require("mongodb");

// Displaying the type of the MongoClient object
// console.log(typeof { MongoClient });

// MongoDB connection string
const url =
  "mongodb+srv://user_demo:hpeafEFkboZbBy2w@cluster0.2fqvbad.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongo() {
  // Creating a new instance of the MongoClient class
  const client = new MongoClient(url);

  // Logging the client object to the console
  // console.log("The value of client object is", client);

  try {
    // Connecting to MongoDB
    await client.connect();
    console.log("Database connected successfully!");

    // Accessing a specific database
    const db = client.db("node_mongo_demo");

    // Creating a collection named 'customers'
    // await db.createCollection("customers");
    // console.log("Collection created!");

    // Inserting a record in the collection named 'customers'
    // const user = { name: "Alex", address: "California" };
    // await db.collection("customers").insertOne(myObj);
    // console.log("Data inserted successfully!");

    // Inserting multiple records in the collection named 'customers'
    // const multipleUsers = [
    //   { name: "Ashley", address: "Chicago" },
    //   { name: "Brian", address: "New York" },
    //   { name: "Christina", address: "Los Angeles" },
    //   { name: "David", address: "Houston" },
    //   { name: "Eva", address: "Miami" },
    // ];
    // const user_record = await db.collection("customers").insertMany(multipleUsers);
    // console.log("Records inserted successfully !");
    // console.log("User record is",user_record);

    // Fetching the first record from the collection named 'customers' that matches the criteria.
    // const first_user_data = await db.collection("customers").findOne({});
    // console.log(
    //   "The first matching record stored in customers collection is",
    //   first_user_data
    // );

    // Fetching all the record from the collection named 'customers' that matches the criteria.
    // const all_user_data = await db.collection("customers").find({}).toArray();
    // console.log("All the user data in customers collection are", all_user_data);

    // const fetch_user = await db
    //   .collection("customers")
    //   .find({ address: "Miami" })
    //   .toArray();
    // console.log("User data is", fetch_user);

    // const fetch_names = await db
    //   .collection("customers")
    //   .find({}, { projection: { address: 0 } })
    //   .toArray();
    // console.log(
    //   "All the user names in the customers collection are",
    //   fetch_names
    // );

    // const delete_user_obj = { name: "Ashley" };
    // const delete_user = await db
    //   .collection("customers")
    //   .deleteOne(delete_user_obj);
    // console.log("user deleted", delete_user);

    const delete_many_user_obj = { name: "Alice" };
    const delete_many_users_filter = {
      name: { $in: ["Brian", "Christina"] },
    };
    const delete_many_users = await db
      .collection("customers")
      .deleteMany(delete_many_users_filter);
    console.log("Multiple users deleted", delete_many_users);
  } catch (err) {
    console.log("The error is", err);
    throw err;
  } finally {
    // Closing the MongoDB connection
    await client.close();
  }
}

// Executing the async function to connect to MongoDB and perform operations
connectToMongo();
