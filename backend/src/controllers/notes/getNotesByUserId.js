const getNotesByIdHandler = require('../../handlers/notes/getNotesByUserId');

const getNotesByUserId = async (req, res) => {
    const { userId } = req.params
    try {
      const notes = await getNotesByIdHandler(req.query, userId); 
      const response = {
        results: notes
      }  
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = getNotesByUserId;
