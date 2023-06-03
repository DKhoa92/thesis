import actionTypes from '../actions/actionTypes';

const initialState = {
    questions: [],
    currentQuestionIdx: 0,
}

const questionGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            let newQuestions = [...state.questions];
            newQuestions.push(action.data);
            return {
                ...state,
                questions: newQuestions,
            }
        case actionTypes.CHANGE_QUESTION:
            return {
                ...state,
                currentQuestionIdx: action.data,
            }
        case actionTypes.ADD_QUESTION:
            return {
                ...state,
                questions: action.data,
            }
        case actionTypes.SET_QUESTIONS:
            return {
                ...state,
                questions: action.data,
            }
        default:
            return state;
    }
}

export default questionGroupReducer;