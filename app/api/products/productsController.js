const Products = require("./models");
const { StatusCodes } = require("http-status-codes");

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await Products.find();

    if (!result)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "fatal error" });

    res.status(StatusCodes.OK).json({
      msg: "Berikut data",
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const result = new Products(req.body).save();

    if (!result)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "fatal error" });

    res.status(StatusCodes.OK).json({
      msg: "Berhasil membuat data",
    });
  } catch (e) {
    console.log(e);
  }
};
