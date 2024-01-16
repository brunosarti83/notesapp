const { Category } = require('../../db/db');

const patchCategoryByIdHandler = async (id, changes) => {
    try {
        const category = await Category.findByPk(id)
        if (!category) {
            throw new Error('No category with the given id was found')
        } else {
            const result = await category.update(changes)
            return result
        }
    } catch (error) {
        throw error //
    }
};

module.exports = patchCategoryByIdHandler;