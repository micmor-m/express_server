//path allow to declare a relative path starting from the folder project
const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);

//module.exports = router;

//this way to export create an object with the name the file + Data and key the name of the variable
//eg adminData.routes
// exports.routes = router;
// exports.products = products;

module.exports = router;
