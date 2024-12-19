// Importing the required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET request handler
app.get('/', (req, res) => {
  res.send('Hello, World! This is a GET request.');
});

// Handling a POST request with JSON data
app.post('/submit', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).send('Name and Age are required.');
  }

  res.send(`Received data: Name = ${name}, Age = ${age}`);
});

// A route with query parameters
app.get('/user', (req, res) => {
  const { name, age } = req.query;

  if (!name || !age) {
    return res.status(400).send('Name and Age query parameters are required.');
  }

  res.send(`Query Params: Name = ${name}, Age = ${age}`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
