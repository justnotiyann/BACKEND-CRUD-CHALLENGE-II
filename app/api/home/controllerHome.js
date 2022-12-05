exports.renderHomePage = (title) => (req, res, next) => {
  res.render("index", {
    title,
  });
};
