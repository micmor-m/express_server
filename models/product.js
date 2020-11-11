//to work with a file as memory for products and not anymore with array:
const fs = require("fs");
const path = require("path");
const helpPath = require("../helper/path");
const p = path.join(helpPath, "data", "products.json");

//helper function
const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    //if error from reading I will return an emprty array
    if (err) {
      return cb([]);
    }

    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("Error from fs write: ", err);
      });
    });
  }

  //the key word STATIC is used to call fetchAll for the class itself not the instance
  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((products) => {
      const product = products.find((product) => product.id === id);
      cb(product);
    });
  }
};
