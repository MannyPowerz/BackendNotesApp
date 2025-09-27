const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// REPLACE WITH DATABASE LATER for storage
const users = [];

const saltRounds = 10;

// Routes
    // store user info regsitration
    // POSt user datat 
    // password encyption 
    // idenitfy getting user info to open notes

router.post('/register', async (res, req) => {
    const {name, email, password} = req.body
    
    try{
        // Create hashj passowrd when registering
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        // Store hash
        users.push(hashedPassword);
    } catch (error) {
        // Error handling 
        console.error('Registration failed:', error);
        res.status(500).send('Registration failed.');
    }
})