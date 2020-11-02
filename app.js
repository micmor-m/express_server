//import core module
//const http = require("http");

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
//const adminData = require("./routes/admin");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//use body parser (works with HTML form and JSON but not with file)
app.use(bodyParser.urlencoded({ extended: false }));
//express middleware for use static file eg css style sheet
app.use(express.static(path.join(__dirname, "public")));
//can be use as any middleware
//the order of the routes still matter
//app.use("/admin", adminData.routes);
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//to catch all routes not defined in our project
app.use((req, res, next) => {
  res.status(404);
  //res.send("Page not found");
  //res.sendFile(path.join(__dirname, "views", "not-found.html"));
  res.render("not-found", { pageTitle: "Page Not Found", path: "" });
});

//start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
