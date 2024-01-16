const patchNoteByIdHandler = require('../../handlers/notes/patchNoteById');

const patchNoteById = async (req, res) => {
    const { id } = req.params
    const changes = req.body
    try {
      const note = await patchNoteByIdHandler(id, changes); 
      const response = {
        message: `Note ${id} edited successfully`,
        note,
      }
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = patchNoteById;