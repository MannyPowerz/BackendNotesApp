// imports
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes');

const authenticateToken = require('./middleware/auth-middleware');
require('dotenv').config();
    // import JWT routes
    // import resource API routes
    // import config
    // import middleware files
    // import auth file from routes

// config for envPath later
// config port later 
const PORT = process.env.PORT
const app = express();

// Configuartion 
    // env, port , data 

// Middlware (General Purpose, Security)
app.use(express.json());
    // Pre-processing middleware
    // Security middleware
        // JWT middleware
app.use('/auth', authRouter);

// Routes
// AUTH JWT routes & Notes JWT


// Test protected route
app.get('/protected', authenticateToken, (req,res)  => {
    res.json({
        message: 'You accessed a protected route',
        user: req.user
    });
});

// Notes route
app.use('/notes', authenticateToken, notesRouter);


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