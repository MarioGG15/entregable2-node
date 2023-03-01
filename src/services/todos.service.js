const Todo = require('../models/todos.model');

class TodoServices {
    static async getAll() {
        try {
            const todos = await Todo.findAll();
            return todos;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const todo = await Todo.findByPk(id, {
                attributes: ['id', 'title', 'description', 'status']
            });
            return todo;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoServices;