const { Category } = require('../../db/db');

const destroyCategoryHandler = async (id) => {
    try {
        const category = await Category.findByPk(id)
        if (!category) {
            throw new Error(`No category with id: ${id} was found`)
        }
        await category.destroy()
        return category

    } catch (error) {
        throw error //
    }
};

module.exports = destroyCategoryHandler;