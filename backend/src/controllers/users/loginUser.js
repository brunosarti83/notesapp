const loginUserHandler = require('../../handlers/users/loginUser');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await loginUserHandler(email, password)
        const response = {
            message: 'Login successful',
            user,
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}

module.exports = loginUser;