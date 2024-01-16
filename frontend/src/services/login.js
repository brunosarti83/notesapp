import axios from "axios";

const login = async (user) => {
    try {
        const url = import.meta.env.VITE_BACKEND + "/users/login"
        const response = await axios.post(url, user)
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default login;