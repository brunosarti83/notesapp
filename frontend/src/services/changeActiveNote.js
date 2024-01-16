import axios from "axios";

const changeActiveNote = async (noteId, active) => {
    try {
        const url = import.meta.env.VITE_BACKEND + `/notes/${noteId}`
        const response = await axios.patch(url, { active })
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default changeActiveNote;