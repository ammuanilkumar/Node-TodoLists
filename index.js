const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
    {
        id:1,
        text: "Learn Node.js",completed:false
    },
    {
        id:2,
        text: "Learn Express.js",
        completed:true

    }
];
let idCounter = 3;

// GET /todos: Get all todos
app.get('/', (req, res) => {
    res.send('Welcom to the Todo API');

});
app.get('/todos', (req, res) => {
    res.json(todos);
});
// POST /todos: Add a new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: idCounter++,
        text: req.body.text,
        completed: req.body.completed || false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// GET /todos/:id: Get a single todo by ID
// app.get('/todos/:id', (req, res) => {
//     const todo = todos.find(t => t.id === parseInt(req.params.id));
//     if (todo) {
//         res.json(todo);
//     } else {
//         res.status(404).send('Todo not found');
//     }
// });
app.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    console.log("Requested ID:", todoId); // Log the requested ID
    const todo = todos.find(t => t.id === todoId);
    console.log("Found Todo:", todo); // Log the found todo

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
}); 


// PUT /todos/:id: Update an existing todo
app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (todo) {
        todo.text = req.body.text || todo.text;
        todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

// DELETE /todos/:id: Delete a todo
app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Todo API is running on http://localhost:${port}`);
});
