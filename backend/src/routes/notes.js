const { Router } = require('express');
const postNote = require('../controllers/notes/postNote');
const getNotes = require('../controllers/notes/getNotes');
const getNotesByUserId = require('../controllers/notes/getNotesByUserId');
const patchNoteById = require('../controllers/notes/patchNoteById');
const deleteNoteById = require('../controllers/notes/deleteNoteById');
const addCategory = require('../controllers/notes/addCategory');
const removeCategory = require('../controllers/notes/removeCategory');


const notesRouter = Router();

notesRouter.post('/:id/:categoryId', addCategory);
notesRouter.delete('/:id/:categoryId', removeCategory);
notesRouter.post('/', postNote);
notesRouter.get('/', getNotes);
notesRouter.get('/:userId', getNotesByUserId);
notesRouter.patch('/:id', patchNoteById);
notesRouter.delete('/:id', deleteNoteById);


module.exports = notesRouter;