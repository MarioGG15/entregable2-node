const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const Todo = require('./models/todos.model');
const todoRoutes = require('./routes/todo.routes');

Todo;

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log("Database connected")
    })
    .catch((error) => console.log(error));

    db.sync()
        .then(() => {
            console.log("Database synchronized")
        })
        .catch((error) => {
            console.log(error)
        });

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(todoRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(PORT, () => {
    console.log(`Server working on the port ${PORT}`);
});