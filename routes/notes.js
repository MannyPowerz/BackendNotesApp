const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
require('dotenv').config();

const notes = [];


// Create a new note
router.post('/', async (req, res) => {
    const {title, content} = req.body;

    // Valdiate of there is content and a title 
    if (!title || !content){
        return res.status(400).json({error: 'Title and content for notes are required'})
    }

    const noteId = Date.now().toString(36) + Math.random().toString(36).slice(2);

    const newNote = {
        id: noteId,
        title: title,
        content: content,
        userId: req.user.userId,
        createdAt: new Date()
    }

    notes.push(newNote);
    res.status(201).json(newNote);  // SEND RESPONSE
})


// Get all of the user's notes
router.get('/', async (req, res) => {
    const filteredNote = notes.filter(note => note.userId === req.user.userId);
    res.json(filteredNote)
})


// Update a specifc note whihc could be edited (reaosn why ia m using pathc instead of put)
router.patch('/notes/:id', async (req, res) => {

})

// Delete a specific note
router.delete('/notes/:id', async (req, res) => {
    
})

module.exports = router;