const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
  //res.reder("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    //console.log("products from conroller", products);
    res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  });
};
