const products = [];

exports.getAddProduct = (req, res, next) => {
  //using path is better that manually concatenate the path because
  //in linux the path uses /
  //in window the path uses \
  //therefore the app may not work in different OS
  //res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //using path is better that manually concatenate the path because
  //in linux the path uses /
  //in window the path uses \
  //therefore the app may not work in different OS
  //res.sendFile(path.join(__dirname, "..", "views", "shop.html"));

  //const products = adminData.products;
  //to render a page using a templete use express function res.render
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};
