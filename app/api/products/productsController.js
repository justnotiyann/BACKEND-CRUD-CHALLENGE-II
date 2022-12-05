const Products = require("./models");
const { StatusCodes } = require("http-status-codes");

// exports.getAllProducts = async (req, res, next) => {
//   try {
//     const { page = 1, limit = 10 } = req.query;

//     const result = await Products.find()
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .exec();

//     const count = await Products.count();

//     res.json({
//       result,
//       totalPages: Math.ceil(count / limit),
//       currentPage: page,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

exports.getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const limitPage = limit * 1;
    const skip = (page - 1) * limit;

    const result = await Products.find().limit(limitPage).skip(skip).exec();
    const totalData = await Products.count();

    res.status(200).json({
      msg: "berikut data",
      result,
      totalData,
      currentPage: page,
    });
  } catch (e) {
    console.log(e.message);
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

exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const checkId = await Products.findOne({ _id: id });
    if (!checkId) {
      res.status(StatusCodes.NOT_FOUND).json({
        msg: "Data Product tidak ditemukan",
      });
    } else {
      await Products.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json({
        msg: "Data product berhasil dihapus",
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const { title, author, price, publisher, url } = req.body;
    const options = { new: true };

    const result = await Products.findByIdAndUpdate(id, req.body, options);

    if (!result) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "Gagal update product",
      });
    } else {
      res.status(StatusCodes.OK).json({
        msg: "berhasil update product",
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};
