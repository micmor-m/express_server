exports.getError = (req, res, next) => {
  res.status(404);
  //res.send("Page not found");
  //res.sendFile(path.join(__dirname, "views", "not-found.html"));
  res.render("not-found", { pageTitle: "Page Not Found", path: "" });
};
