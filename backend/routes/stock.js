const express = require("express");
const router = express.Router();
const StockController = require("../controllers/stock");

router.post("/registerStock",StockController.registerStock);
router.get("/listStock/:name?",StockController.listStock);

module.exports = router;