const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

// GET /items (모든 아이템 조회)
router.get("/items", Controller.getItems);

// POST /items (새로운 아이템 추가)
router.post("/items", Controller.addItem);

module.exports = router;
