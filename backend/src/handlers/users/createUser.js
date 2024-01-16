const { User } = require('../../db/db');
const { hashPassword } = require('../../utils/passwordHasher');

const createUserHandler = async (data) => {
  const { email, password } = data;
  try {
    const hashedPassword = await hashPassword(password);
    const foundUser = await User.findOne({
      where: {
        email,
      },
    });
    data = { ...data, password: hashedPassword, _active: true };
    if (foundUser) {
      if (!foundUser._active) {
        const updated = await User.update(data, {
          where: { email: foundUser.email },
          return: true,
          raw: true,
        });
        return updated;
      } else {
        throw new Error('Customer already registered with that email');
      }
    } else {
      const created = await User.create(data);
      return { id: created.id, email: created.email};
    }
  } catch (error) {
      throw error //
  }
};

module.exports = createUserHandler;