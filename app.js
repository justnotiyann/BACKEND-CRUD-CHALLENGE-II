const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const productRoutes = require("./app/api/products/router");
const homeRoutes = require("./app/api/home/router");
app.use("/products", productRoutes);
app.use("/", homeRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ msg: "routes tidak ditemukan" });
});

app.listen(3000, () => console.log("server up and running"));
module.exports = app;
