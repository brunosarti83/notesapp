const { Note } = require('../../db/db');

const destroyNoteHandler = async (id) => {
    try {
        const note = await Note.findByPk(id)
        if (!note) {
            throw new Error(`No note with id: ${id} was found`)
        }
        await note.destroy()
        return note

    } catch (error) {
        throw error //
    }
};

module.exports = destroyNoteHandler;