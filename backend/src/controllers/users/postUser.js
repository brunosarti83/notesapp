const createUserHandler = require('../../handlers/users/createUser');

const postUser = async (req, res) => {
    const data = req.body;
    try {
      const newUser = await createUserHandler(data);
      res.status(201).json({message: 'New user created successfully', created: newUser});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = postUser;