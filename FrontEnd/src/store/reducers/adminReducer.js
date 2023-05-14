import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDERS:
            return {
                ...state,
                genders: action.data
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                roles: action.data
            }
        default:
            return state;
    }
}

export default adminReducer;