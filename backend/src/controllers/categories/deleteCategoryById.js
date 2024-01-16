const destroyCategoryHandler = require('../../handlers/categories/destroyCategory');

const deleteCategoryById = async (req, res) => {
    const { id } = req.params
    try {
      const destroyed = await destroyCategoryHandler(id);
      const response = {
        message: 'Category successfully deleted',
        destroyed
      } 
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = deleteCategoryById;