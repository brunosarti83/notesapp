const { User } = require('../../db/db');

const deactivateUser = async (id) => {
    try {
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error('No user with the given id was found')
        } else {
            const result = await user.update({ _active: false })
            return result
        }
    } catch (error) {
        throw error //
    }
};

module.exports = deactivateUser;