const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = async () => {
  const client = new MongoClient("mongodb+srv://phuong2003vt:dame113114@cluster0.fvywr8g.mongodb.net/");
  
  try {
    await client.connect();
    const database = client.db("MyData");
    db.users = database.collection("users");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    console.log("Connected to database");

    const usersData = await db.users.find({}).toArray();
    const inventoryData = await db.inventories.find({}).toArray();
    const orderData = await db.orders.find({}).toArray();
    // console.log("Users data:", orderData);
    db.inventories = inventoryData;
    db.orders = orderData;
    db.users = usersData;
    // console.log(db);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

module.exports = { connectToDb, db };