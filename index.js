require('dotenv').config();
const express = require("express");
const { connectToDb, db } = require("./db");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const checkAuthN = require("./middleware/checkAuthN");

//server json body
app.use(express.json());
//serve cookie
app.use(cookieParser());

// routes
app.use("/", require("./routes/root"));
app.use("/products", require("./routes/products"));
app.use("/login", require("./routes/login"));
app.use("/order",checkAuthN, require("./routes/orders"));

app.listen(3000, async () => {
  console.log("App is running at 3000");
  await connectToDb();
});
