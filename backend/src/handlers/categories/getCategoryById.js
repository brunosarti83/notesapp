const { Category, Note } = require('../../db/db');

const getCategoryByIdHandler = async (id) => {
    try {
        const category = await Category.findByPk(id, {
            include: [{
                model: Note,
                attributes: ['id', 'title', 'description'],
                through: {
                    attributes: []
                }
            }]
        })
        return category
    } catch (error) {
        throw error //
    }
};

module.exports = getCategoryByIdHandler;