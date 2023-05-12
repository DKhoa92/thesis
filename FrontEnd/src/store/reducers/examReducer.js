import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    currentQuestionIdx: 0,
    questions: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default appReducer;