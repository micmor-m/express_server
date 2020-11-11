const fs = require("fs");
const path = require("path");
const helpPath = require("../helper/path");
const p = path.join(helpPath, "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    //Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      //if error from reading means no cart exist so I create one
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      //Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        //if not existing product
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      //the plus in front of productPrice is to convert it in number
      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log("Error from fs write: ", err);
      });
    });
  }
};
