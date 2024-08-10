# Todo List API

A RESTful API for managing a todo list, built with Node.js and Express.js.

## Features

- Create, read, update, and delete (CRUD) todos

- JSON-based API responses

# API ENDPOINTS

Get all todos
URL:/todos
Method: GET

Get  todo by ID
URL : /todos/1
method :GET
# BODY :


Create a new todo
URL: /todos
Method: POST
# BODY :
 {
    "text": "Learn Node.js",
    "completed": false
}


Update todo
URL: /todos/1
Method: PUT
# BODY :
{
    "text": "Learn Express.js",
    "completed": true
}

Delete a todo
URL:/todos/1
Method: DELETE


