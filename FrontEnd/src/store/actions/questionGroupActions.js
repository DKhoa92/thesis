import { toast } from "react-toastify";
import { createQuestionGroupService, createQuestionUsingService, getQuestionGroupsService, getQuestionsByGroupIdService } from "../../services/questionGroupService";
import actionTypes from "./actionTypes";

export const addQuestion = (question) => ({
    type: actionTypes.ADD_QUESTION,
    data: question
})

export const changeQuestion = (index) => ({
    type: actionTypes.CHANGE_QUESTION,
    data: index
})

export const setQuestions = (questions) => ({
    type: actionTypes.SET_QUESTIONS,
    data: questions
})

// =========================================================================================================

export const fetchAllQuestionGroups = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getQuestionGroupsService();
            if (res && res.errCode === 0) {
                dispatch(fetchAllQuestionGroupsSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchAllQuestionGroupsFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchAllQuestionGroupsFailed());
        }
    }
}
export const fetchAllQuestionGroupsSuccess = (dataQuestionGroups) => ({
    type: actionTypes.FETCH_ALL_QUESTION_GROUPS_SUCCESS,
    data: dataQuestionGroups
})
export const fetchAllQuestionGroupsFailed = () => ({
    type: actionTypes.FETCH_ALL_QUESTION_GROUPS_FAILED,
})

// =========================================================================================================

export const createQuestionGroup = (data, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await createQuestionGroupService(data);
            if (res && res.errCode === 0) {
                dispatch(createQuestionGroupSuccess());
                toast.success("Created new question group succesfully");
                successCallback && successCallback(res.questionGroupId);
            } else {
                console.log(res.errMessage);
                toast.error("Failed to create new question group");
                dispatch(createQuestionGroupFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(createQuestionGroupFailed());
            toast.error("Failed to create new question group");
        }
    }
}
export const createQuestionGroupSuccess = () => ({
    type: actionTypes.CREATE_QUESTION_GROUP_SUCCESS,
})
export const createQuestionGroupFailed = () => ({
    type: actionTypes.CREATE_QUESTION_GROUP_FAILED,
})

// =========================================================================================================

export const createQuestionUsing = (data, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await createQuestionUsingService(data);
            if (res && res.errCode === 0) {
                dispatch(createQuestionUsingSuccess());
                toast.success("Created new question using succesfully");
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
                toast.error("Failed to create new question using");
                dispatch(createQuestionUsingFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(createQuestionUsingFailed());
            toast.error("Failed to create new question using");
        }
    }
}
export const createQuestionUsingSuccess = () => ({
    type: actionTypes.CREATE_QUESTION_USING_SUCCESS,
})
export const createQuestionUsingFailed = () => ({
    type: actionTypes.CREATE_QUESTION_GROUP_FAILED,
})

// =========================================================================================================

export const fetchQuestionsByGroupId = (questionGroupId) => {
    return async (dispatch, getState) => {
        try {
            let res = await getQuestionsByGroupIdService(questionGroupId);
            if (res && res.errCode === 0) {
                dispatch(fetchQuestionsByGroupIdSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchQuestionsByGroupIdFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchQuestionsByGroupIdFailed());
        }
    }
}
export const fetchQuestionsByGroupIdSuccess = (dataQuestionGroups) => ({
    type: actionTypes.FETCH_QUESTIONS_BY_GROUP_ID_SUCCESS,
    data: dataQuestionGroups
})
export const fetchQuestionsByGroupIdFailed = () => ({
    type: actionTypes.FETCH_QUESTIONS_BY_GROUP_ID_FAILED,
})