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
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//to catch all routes not defined in our project
app.use((req, res, next) => {
  res.status(404);
  res.send("Page not found");
});

//start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
