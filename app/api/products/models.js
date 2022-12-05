const db = require("../../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    title: String,
    author: String,
    price: String,
    publisher: String,
    url: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Products = db.model("product", productsSchema);
module.exports = Products;
