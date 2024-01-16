import axios from "axios";

const changeNote = async (noteId, note) => {
    try {
        const url = import.meta.env.VITE_BACKEND + `/notes/${noteId}`
        const response = await axios.patch(url, { title: note.title, description: note.description })
        const { data } = response
        return data
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default changeNote;