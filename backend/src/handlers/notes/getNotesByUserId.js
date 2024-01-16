const { Note, Category } = require('../../db/db');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const getNotesByIdHandler = async (queryObj, userId) => {
    try {
        // setup where query
        const { id, active, archived, categories } = queryObj
        const where = { UserId: userId }
        if (id) where.id = id
        if (active) where.active = active
        if (archived) where.archived = archived
        
        const categoryFilter = categories ? {
            name: {[Op.in]: decodeURIComponent(categories).split(',')}
        } : undefined

        const notes = await Note.findAll({
            where,
            include: [{
                model: Category,
                where: categoryFilter,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
        return notes
    } catch (error) {
        throw error //
    }
};

module.exports = getNotesByIdHandler;