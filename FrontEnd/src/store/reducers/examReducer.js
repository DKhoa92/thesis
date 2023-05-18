import actionTypes from '../actions/actionTypes';

const initialState = {
    exam: {},
    currentQuestionIdx: 0,
    questions: [],
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default examReducer;