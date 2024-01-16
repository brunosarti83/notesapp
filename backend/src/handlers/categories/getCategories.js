const { Category, Note } = require('../../db/db');

const getCategoriesHandler = async (queryObj) => {
    try {
        // setup where query
        const where = {}
        if (queryObj.name) where.name = queryObj.name

        const categories = await Category.findAll({
            where,
            include: [{
                model: Note,
                attributes: ['id', 'title', 'description'],
                through: {
                    attributes: []
                }
            }]
        })
        return categories
    } catch (error) {
        throw error //
    }
};

module.exports = getCategoriesHandler;