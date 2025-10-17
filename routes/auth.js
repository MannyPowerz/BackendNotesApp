const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// REPLACE WITH DATABASE LATER for storage
const users = [];

const saltRounds = 10;

// Routes
    // store user info regsitration
    // POSt user datat 
    // password encyption 
    // idenitfy getting user info to open notes

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    
    // VALIDATION
    if (!name || !email || !password) {
        return res.status(400).json({error:'fields name, email, password required' })
    }

    const emailAvailability = users.find( user => user.email === email);

    if (emailAvailability) {
        return res.status(409).json({error: 'This email has already been registered' })
    }

    // PROCESSING
    try{
        // Create hash passowrd when registering
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const userId = Date.now().toString(36) + Math.random().toString(36).slice(2);

        // Storing credentials
        const newUser = {
            id: userId,
            name: name,
            email: email,
            password: hashedPassword
        }

        users.push(newUser)

        console.log('Current users: ', users)

        res.status(201).json({
            success: true,
            message: 'Succesfull Registration',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
            }
        })
        
    } catch (error) {
        // Error handling 
        console.error('Registration failed:', error);
        res.status(500).send('Registration failed.');
    }
})

route.post('/login', async (req, res) => {
    
    // VALIDATION
    
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({error:'fields email & password required' })
    }

    try {
        // Find User's identification through EMAIL Credential
        const user = await users.findOne({email});

        if (!user) {
            return res.status(401).json({ error: 'Credential are Invalid'})
        }

        // Compare the incoming password with the stored hashed password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const isMatch = await bcrypt.compare(password, user.hashedPassword)
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Credential are Invalid'})
        }

        // When succesfull login ococurs make token
        const token = jwt.sign(
            {user: userId}, 
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
        )

        // Response sent to client
        res.status(200).json({
            success: true,
            message: 'Login is a success',
            token
        })
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An unexpected error occurred.'})
    }
    
})

module.exports = router;