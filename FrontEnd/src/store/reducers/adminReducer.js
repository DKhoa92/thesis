import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    users: [],
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
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state;
    }
}

export default adminReducer;