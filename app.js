//import core module

//import 3rd party packages
//path allow to declare a relative path starting from the folder project
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//create express application
const app = express();

//to set global variable in express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//import my functions
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

//use body parser (works with HTML form and JSON but not with file)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//to catch all routes not defined in our project
app.use(errorController.getError);

//start server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
