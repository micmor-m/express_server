//import core module
const http = require("http");

//import 3rd party packages
const express = require("express");

//create express application
const app = express();

//create server
const server = http.createServer(app);

//start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
