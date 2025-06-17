const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/tasks.controller");

router.get("/tasks", TaskController.getAllTasks);
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:id/status", TaskController.updateTaskStatus);
router.delete("/tasks/:id", TaskController.deleteTask);

module.exports = router;
