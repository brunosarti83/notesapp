const { Note, Category } = require('../../db/db');

const addCategoryHandler = async (id, categoryId) => {
    try {
        const note = await Note.findByPk(id)
        if (!note) {
            throw new Error(`No note with id: ${id} was found`)
        }
        await note.addCategory(categoryId)
        const updatedNote = await Note.findByPk(id, {
            include: [{
                model: Category,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
        return updatedNote

    } catch (error) {
        throw error //
    }
};

module.exports = addCategoryHandler;