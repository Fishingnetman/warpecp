const db = require("../config/db.config");

class TaskController {
  async getAllTasks(req, res) {
    try {
      const [rows] = await db.query("SELECT * FROM tasks ORDER BY created_at DESC");
      res.json(rows);
    } catch (error) {
      console.error("Error getting tasks:", error);
      res.status(500).json({ error: "Failed to get tasks" });
    }
  }

  async createTask(req, res) {
    try {
      const { title, description } = req.body;
      if (!title) {
        return res.status(400).json({ error: "Title is required" });
      }

      const [result] = await db.query(
        "INSERT INTO tasks (title, description) VALUES (?, ?)",
        [title, description]
      );

      const [newTask] = await db.query("SELECT * FROM tasks WHERE id = ?", [
        result.insertId,
      ]);

      res.status(201).json(newTask[0]);
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Failed to create task" });
    }
  }

  async updateTaskStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!["pending", "in_progress", "completed"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }

      await db.query("UPDATE tasks SET status = ? WHERE id = ?", [status, id]);

      const [updatedTask] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);

      if (updatedTask.length === 0) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.json(updatedTask[0]);
    } catch (error) {
      console.error("Error updating task:", error);
      res.status(500).json({ error: "Failed to update task" });
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const [result] = await db.query("DELETE FROM tasks WHERE id = ?", [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Task not found" });
      }

      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ error: "Failed to delete task" });
    }
  }
}

module.exports = new TaskController();
