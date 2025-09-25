// imports
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
    // import dotenvfile
    // import JWT routes
    // import resource API routes
    // import config
    // import middleware files

const app = express();

// Configuartion 
    // env, port , data 

// Middlware (General Purpose, Security)
app.use(express.json());
    // Pre-processing middleware
    // Security middleware
        // JWT middleware

// Routes
// AUTH JWT routes & Notes JWT
    // coordinates function and cxontroller 
    // app.use(path{config.prefix}, router fiule contents )
app.get('/', (req, res) => {
    res.json({ message: 'Notes API is running!' });
});

// Middleware
    // Error handling middleare

// Starting server 
app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});