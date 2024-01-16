const { Category } = require('../../db/db');

const createCategoryHandler = async (data) => {
    try {
        const newCategory = await Category.create(data)
        return newCategory
    } catch (error) {
        throw error //
    }
}

module.exports = createCategoryHandler