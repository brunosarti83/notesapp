const createNoteHandler = require('../../handlers/notes/createNote');

const postNote = async (req, res) => {
    const data = req.body;
    try {
      const newNote = await createNoteHandler(data);
      res.status(201).json({message: 'New note created successfully', created: newNote});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = postNote;