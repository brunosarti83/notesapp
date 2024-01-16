const { Note } = require('../../db/db');

const patchNoteByIdHandler = async (id, changes) => {
    try {
        const note = await Note.findByPk(id)
        if (!note) {
            throw new Error('No note with the given id was found')
        } else {
            const result = await note.update(changes)
            return result
        }
    } catch (error) {
        throw error //
    }
};

module.exports = patchNoteByIdHandler;