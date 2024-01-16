const destroyNoteHandler = require('../../handlers/notes/destroyNote');

const deleteNoteById = async (req, res) => {
    const { id } = req.params
    try {
      const destroyed = await destroyNoteHandler(id);
      const response = {
        message: 'Note successfully deleted',
        destroyed
      } 
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = deleteNoteById;