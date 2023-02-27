const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.get("/todo", todoController.all);
router.post("/todo", todoController.add);
router.put("/todo/:id", todoController.update);
router.delete("/todo/:id", todoController.remove);

module.exports = router;
