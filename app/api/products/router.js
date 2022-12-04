const router = require("express").Router();
const controller = require("./productsController");

router.get("/", controller.getAllProducts);
router.post("/add", controller.createProduct);

module.exports = router;
