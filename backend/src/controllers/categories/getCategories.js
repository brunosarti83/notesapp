const getCategoriesHandler = require('../../handlers/categories/getCategories');

const getCategories = async (req, res) => {
    try {
      const categories = await getCategoriesHandler(req.query);
      const response = {
        results: categories
      }  
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = getCategories;