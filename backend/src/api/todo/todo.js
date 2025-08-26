const express = require("express");
const {
  createTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo
} = require("./controller/todos");

const router = express.Router();

// Create a new todo
router.post("/", createTodo);

// Get all todos (optionally could filter by userId in query string if needed)
router.get("/", getAllTodos);

// Get a single todo by ID
router.get("/:id", getSingleTodo);

// Update a todo by ID
router.put("/:id", updateTodo);

// Delete a todo by ID
router.delete("/:id", deleteTodo);

module.exports = router;
