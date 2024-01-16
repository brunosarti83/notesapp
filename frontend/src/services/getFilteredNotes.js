import axios from "axios";

const getFilteredNotes = async (filterObj, userId) => {
    try {
        const url = import.meta.env.VITE_BACKEND + `/notes/${userId}`
        const params = {}
        if (filterObj.active !== 'all') params.active = filterObj.active
        if (filterObj.archived !== 'all') params.archived = filterObj.archived
        const response = await axios.get(url, { params })
        const { data } = response
        return data.results
    } catch (error) {
        throw new Error(error.response.data.error)
    }
}

export default getFilteredNotes;