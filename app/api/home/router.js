const router = require("express").Router();
const controller = require("./controllerHome");

router.get("/", controller.renderHomePage("Halaman Utama"));

module.exports = router;
