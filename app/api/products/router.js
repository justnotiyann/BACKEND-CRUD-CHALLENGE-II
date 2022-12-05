const router = require("express").Router();
const controller = require("./productsController");

router.get("/", controller.getAllProducts);
router.post("/add", controller.createProduct);
router.post("/update/:id", controller.updateProduct);
router.get("/delete/:id", controller.deleteProduct);

module.exports = router;
