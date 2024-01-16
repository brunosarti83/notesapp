const deactivateUser = require('../../handlers/users/deactivateUser');

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
      const deleted = await deactivateUser(id);
      const response = {
        message: 'User successfully deactivated',
        deleted
      } 
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = deleteUser;