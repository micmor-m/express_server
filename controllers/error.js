exports.getError = (req, res, next) => {
  res.status(404);
  res.render("not-found", { pageTitle: "Page Not Found", path: "" });
};
