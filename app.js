//import core module
//const http = require("http");

//import 3rd party packages
const express = require("express");
const bodyParser = require("body-parser");

//create express application
const app = express();

//import my functions
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//use body parser (works with HTML form and JSON but not with file)
app.use(bodyParser.urlencoded({ extended: false }));

//can be use as any middleware
//the order of the routes still matter
app.use(adminRoutes);

app.use("/", (req, res, next) => {
  console.log("I always run!");
  next();
});

app.use(shopRoutes);

//start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
