const patchCategoryByIdHandler = require('../../handlers/categories/patchCategoryById');

const patchCategoryById = async (req, res) => {
    const { id } = req.params
    const changes = req.body
    try {
      const category = await patchCategoryByIdHandler(id, changes); 
      const response = {
        message: `Category ${id} edited successfully`,
        category,
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = patchCategoryById;