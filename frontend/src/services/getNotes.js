import axios from "axios";

const getNotes = async (userId) => {
    try {
        const url = import.meta.env.VITE_BACKEND + `/notes/${userId}`
        const response = await axios.get(url)
        const { data } = response
        return data.results
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default getNotes;