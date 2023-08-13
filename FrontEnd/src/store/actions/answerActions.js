import { toast } from "react-toastify";
import actionTypes from "./actionTypes";

export const confirmAnswer = (answerModel) => ({
    type: actionTypes.CONFIRM_ANSWER,
    data: answerModel
})

export const updateAnswer = (answerModel, idx) => ({
    type: actionTypes.UPDATE_ANSWER,
    data: { answerModel, idx }
})

export const pushAnswers = () => {
    return async (dispatch, getState) => {
        dispatch(successs());
    }
}

export const successs = () => ({
    type: actionTypes.PUSH_ANSWERS,
})