import axios from "axios";

const register = async (user) => {
    try {
        const { email, password } = user
        const url = import.meta.env.VITE_BACKEND + "/users/register"
        const response = await axios.post(url, { email, password })
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default register;