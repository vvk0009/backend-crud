const getTodos = (req, res) => {
    res.send("all todo");
};

const addTodo = (req, res) => {
    res.send("add todo");
};

const updateTodo = (req, res) => {
    res.send("update todo");
};

const deleteTodo = (req, res) => {
    res.send("delete todo");
};

const getTodo = (req, res) => {
    res.send("get todo");
};

module.exports = {getTodos, addTodo, getTodo, updateTodo, deleteTodo};  // Export the getTodos function   