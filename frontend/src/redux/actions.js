import getNotes from '../services/getNotes';
import createNote from '../services/createNote';
import changeActiveNote from '../services/changeActiveNote';
import changeArchivedNote from '../services/changeArchivedNote';
import getFilteredNotes from '../services/getFilteredNotes';
import changeNote from '../services/changeNote';


export const SAVE_USER = 'SAVE_USER'
export const LOG_OUT = 'LOG_OUT'
export const GET_NOTES = 'GET_NOTES'
export const CREATE_NOTE = 'CREATE_NOTE'
export const SWITCH_ACTIVE = 'SWITCH_ACTIVE'
export const SWITCH_ARCHIVED = 'SWITCH_ARCHIVED'
export const FILTER_NOTES = 'FILTER_NOTES'
export const EDIT_NOTE = 'EDIT_NOTE'



export const saveUser = (userId) => {
    return {
        type: SAVE_USER,
        payload: userId
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: ""
    }
}

export const getUserNotes = (userId) => {
    return async (dispatch) => {
        try {
            const userNotes = await getNotes(userId)
            return dispatch({
                type: GET_NOTES,
                payload: userNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const createNoteAction = (note) => {
    return async (dispatch) => {
        try {
            await createNote(note)
            console.log(note.UserId)
            const userNotes = await getNotes(note.UserId)
            return dispatch({
                type: CREATE_NOTE,
                payload: userNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const switchActive = (noteId, active) => {
    return async (dispatch) => {
        try {
            const response = await changeActiveNote(noteId, active)
            const userNotes = await getNotes(response.note.UserId)
            return dispatch({
                type: SWITCH_ACTIVE,
                payload: userNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const switchArchived = (noteId, archived) => {
    return async (dispatch) => {
        try {
            const response = await changeArchivedNote(noteId, archived)
            const userNotes = await getNotes(response.note.UserId)
            return dispatch({
                type: SWITCH_ARCHIVED,
                payload: userNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const filterNotes = (filterObj, userId) => {
    return async (dispatch) => {
        try {
            const filteredNotes = await getFilteredNotes(filterObj, userId)
            return dispatch({
                type: FILTER_NOTES,
                payload: filteredNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export const editNoteAction = (noteId, note) => {
    return async (dispatch) => {
        try {
            const response = await changeNote(noteId, note)
            const userNotes = await getNotes(response.note.UserId)
            return dispatch({
                type: EDIT_NOTE,
                payload: userNotes
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}