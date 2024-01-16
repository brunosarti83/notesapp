const createCategoryHandler = require('../../handlers/categories/createCategory');

const postCategory = async (req, res) => {
    const data = req.body;
    try {
      const newCategory = await createCategoryHandler(data);
      res.status(201).json({message: 'New category created successfully', created: newCategory});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = postCategory;