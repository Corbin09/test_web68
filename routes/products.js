const express = require("express");
const router = express.Router();
const getAllProduct = require("../controllers/productController");

router.get("/", getAllProduct);

module.exports = router;