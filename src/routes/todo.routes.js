const { Router } = require('express');
const Todo = require('../models/todos.model');
const { getAllTodos, getTodoById } = require('../controllers/todos.controller');

const router = Router();

router.get('/api/v1/todos', getAllTodos);

router.get('/api/v1/todos/:id', getTodoById);

router.post('/api/v1/todos', async (req, res) => {
    try {
        const newTodo = req.body;
        const result = await Todo.create(newTodo);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await Todo.update(data, {
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;