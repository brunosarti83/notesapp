const getNotesHandler = require('../../handlers/notes/getNotes');

const getNotes = async (req, res) => {
    try {
      const notes = await getNotesHandler(req.query);
      const response = {
        results: notes
      }  
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = getNotes;
