import { toast } from 'react-toastify';
import { createAnswersService } from '../../services/answerService';
import actionTypes from '../actions/actionTypes';

const initialState = {
    answers: [],
}

const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONFIRM_ANSWER:
        case actionTypes.UPDATE_ANSWER:
            let answers = state.answers;
            answers[`${action.data.idx}`] = action.data.answerModel;
            return {
                ...state,
                answers: answers,
            }
        case actionTypes.PUSH_ANSWERS:
            (async () => {
                try {
                    let res = await createAnswersService(state.answers);
                    if (res && res.errCode === 0) {
                        toast.success("Submit answers succesfully");
                        return {
                            ...state,
                            answers: []
                        };
                    } else {
                        console.log(res.errMessage);
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
            return state;
        default:
            return state;
    }
}

export default answerReducer;