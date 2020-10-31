//path allow to declare a relative path starting from the folder project
const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //using path is better that manually concatenate the path because
  //in linux the path uses /
  //in window the path uses \
  //therefore the app may not work in different OS
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
