import axios from "axios";

const changeArchivedNote = async (noteId, archived) => {
    try {
        const url = import.meta.env.VITE_BACKEND + `/notes/${noteId}`
        const response = await axios.patch(url, { archived })
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default changeArchivedNote;