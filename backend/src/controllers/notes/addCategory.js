const addCategoryHandler = require('../../handlers/notes/addCategory');

const addCategory = async (req, res) => {
    const { id, categoryId } = req.params
    try {
      const note = await addCategoryHandler(id, categoryId); 
      const response = {
        message: `Category added successfully`,
        note,
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = addCategory;