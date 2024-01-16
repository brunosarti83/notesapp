import axios from "axios";

const createNote = async (note) => {
    try {
        const url = import.meta.env.VITE_BACKEND + "/notes"
        const response = await axios.post(url, note)
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default createNote;