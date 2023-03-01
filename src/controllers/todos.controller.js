const TodoServices = require('../services/todos.service');

const getAllTodos = async (req, res) => {
    try {
        const data = await TodoServices.getAll();
        res.json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoServices.getById(id);
        res.json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getAllTodos,
    getTodoById
};