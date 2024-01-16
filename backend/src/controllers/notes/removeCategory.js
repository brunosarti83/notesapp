const removeCategoryHandler = require('../../handlers/notes/removeCategory');

const removeCategory = async (req, res) => {
    const { id, categoryId } = req.params
    try {
      const note = await removeCategoryHandler(id, categoryId); 
      const response = {
        message: `Category removed successfully`,
        note,
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = removeCategory;