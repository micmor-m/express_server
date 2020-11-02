//path allow to declare a relative path starting from the folder project
const path = require("path");
const express = require("express");
//const adminData = require("./admin");
const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.getProducts);

module.exports = router;
