import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    types: [],
    subjects: [],
    grades: [],
    difficulties: [],
    users: [],
    user: {},
    questions: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDERS:
            return {
                ...state,
                genders: action.data
            }
        case actionTypes.FETCH_ROLES:
            return {
                ...state,
                roles: action.data
            }
        case actionTypes.FETCH_TYPES_SUCCESS:
            return {
                ...state,
                types: action.data
            }
        case actionTypes.FETCH_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.data
            }
        case actionTypes.FETCH_GRADES_SUCCESS:
            return {
                ...state,
                grades: action.data
            }
        case actionTypes.FETCH_DIFFICULTIES_SUCCESS:
            return {
                ...state,
                difficulties: action.data
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.data
            }
        case actionTypes.FETCH_ALL_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.data
            }
        case actionTypes.CHANGE_EDIT_USER:
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
}

export default adminReducer;