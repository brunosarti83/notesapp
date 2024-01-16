const { User } = require('../../db/db');
const { comparePassword } = require('../../utils/passwordHasher');

const loginUserHandler = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email: email, _active: true },
    });
    if (!user) {
        throw new Error(`Wrong email or password`);
    }
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
        throw new Error(`Wrong email or password`);
    }
    return { id: user.id, email: user.email } 
    
  } catch (error) {
    throw error
  }
};

module.exports = loginUserHandler;