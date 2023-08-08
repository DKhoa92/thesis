import actionTypes from '../actions/actionTypes';

const initialState = {
    questions: [],
    currentQuestionIdx: 0,
    questionGroups: [],
}

const questionGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_QUESTION_GROUPS_SUCCESS:
            return {
                ...state,
                questionGroups: action.data,
            }
        // case actionTypes.ADD_QUESTION:
        //     let newQuestions = [...state.questions];
        //     newQuestions.push(action.data);
        //     return {
        //         ...state,
        //         questions: newQuestions,
        //     }
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
        case actionTypes.FETCH_QUESTIONS_BY_GROUP_ID_SUCCESS:
            return {
                ...state,
                questions: action.data,
            }
        default:
            return state;
    }
}

export default questionGroupReducer;