const router = require("express").Router();
const controller = require("./productsController");

router.get("/", controller.renderProductsUI);
router.get("/all", controller.getAllProducts);
router.post("/add", controller.createProduct);
router.post("/update/:id", controller.updateProduct);
router.get("/delete/:id", controller.deleteProduct);
router.get("/search/:id", controller.searchProducts);

module.exports = router;
