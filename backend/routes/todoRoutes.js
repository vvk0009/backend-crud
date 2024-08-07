const express = require('express');
const { getTodos, addTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers');  // Import the getTodos function

const router = express.Router();

router.get("/", getTodos); 

router.post("/", addTodo);

router.get("/:id", getTodo);

router.put("/:id", updateTodo);

router.delete("/:id",deleteTodo);


module.exports = router;    // Export the router object
