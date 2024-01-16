const { Note } = require('../../db/db');

const createNoteHandler = async (data) => {
    try {
        const newNote = await Note.create(data)
        return newNote
    } catch (error) {
        throw error //
    }
};

module.exports = createNoteHandler;