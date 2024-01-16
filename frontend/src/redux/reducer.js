import { SAVE_USER, LOG_OUT, GET_NOTES, CREATE_NOTE, SWITCH_ACTIVE, SWITCH_ARCHIVED, FILTER_NOTES, EDIT_NOTE} from "./actions"

const initialState = {
    userId: "",
    notes: []
}

export const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {...state, userId: action.payload} 
        case LOG_OUT:
            return {...initialState} 
        case GET_NOTES:
            return {...state, notes: action.payload}
        case CREATE_NOTE:
            return {...state, notes: action.payload}
        case SWITCH_ACTIVE:
            return {...state, notes: action.payload}
        case SWITCH_ARCHIVED:
            return {...state, notes: action.payload}
        case FILTER_NOTES:
            return {...state, notes: action.payload}
        case EDIT_NOTE:
            return {...state, notes: action.payload}
        default:
            return state
    }
}