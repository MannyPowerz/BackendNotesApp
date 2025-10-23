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
    const noteId = req.params.id;
    const userId = req.user.userId;
    const { title, content } = req.body;


    try {
        // NoteId Verifcation
        const noteIndex = notes.findIndex(note => note.id === noteId);

        if (noteIndex === -1) {
            return res.status(404).json({ message: 'Note not found' });
        }

        // Get the specific note object you will modify
        const note = notes[noteIndex];

        // Security checking Note belongs to User
        if (note.userId !== userId)


        // Check if 'title' was provided and update the note object
        if (title !== undefined) {
            note.title = title
        }

        // Check if 'content' was provided and update the note object
        if (content !== undefined) {
            note.content = content;
        }

        //Update specifc note through assinging it to updated content and title for note of specific user
        user.notes[noteIdVerifcationIndex] = noteToUpdate

        res.status(200).json({
            success: true,
            message: 'Note updated',
            data: noteToUpdate
        })
    }

    catch (error) {
        console.error({error: 'Error Updating the note: ', error});
        res.status(500).json({error: 'Error updating the note.'})
    }

})

// Delete a specific note
router.delete('/notes/:id', async (req, res) => {
    
})

module.exports = router;