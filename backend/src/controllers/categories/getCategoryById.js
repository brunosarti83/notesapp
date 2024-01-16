const getCategoryByIdHandler = require('../../handlers/categories/getCategoryById');

const getCategoryById = async (req, res) => {
    const { id } = req.params
    try {
      const category = await getCategoryByIdHandler(id); 
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = getCategoryById;