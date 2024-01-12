const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");
// all controllers goes here
router.post("/transaction", controllers.addTransaction);
router.get("/transactions", controllers.getAllTransactions);
router.delete("/transaction/:id", controllers.deleteTransaction);
module.exports = router;