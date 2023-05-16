import actionTypes from "./actionTypes";
import { getUsers, createUserService, editUserService, deleteUserService, getAllCodeService } from "../../services/userService";
import { CODE_TYPE } from "../../utils";
import { toast } from "react-toastify";
import { createQuestionService, getQuestionsService, editQuestionService, deleteQuestionService } from "../../services/questionService";

export const fetchGenders = (dataGender) => ({
    type: actionTypes.FETCH_GENDERS,
    data: dataGender
})

export const fetchRoles = (dataRole) => ({
    type: actionTypes.FETCH_ROLES,
    data: dataRole
})
// =========================================================================================================
export const fetchTypes = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService(CODE_TYPE.TYPE);
            if (res && res.errCode == 0) {
                dispatch(fetchTypesSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchTypesFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchTypesFailed());
        }
    }
}
export const fetchTypesSuccess = (typeData) => ({
    type: actionTypes.FETCH_TYPES_SUCCESS,
    data: typeData
})
export const fetchTypesFailed = () => ({
    type: actionTypes.FETCH_TYPES_FAILED,
})
// =========================================================================================================
export const fetchSubjects = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService(CODE_TYPE.SUBJECT);
            if (res && res.errCode == 0) {
                dispatch(fetchSubjectsSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchSubjectsFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchSubjectsFailed());
        }
    }
}
export const fetchSubjectsSuccess = (subjectData) => ({
    type: actionTypes.FETCH_SUBJECTS_SUCCESS,
    data: subjectData
})
export const fetchSubjectsFailed = () => ({
    type: actionTypes.FETCH_SUBJECTS_FAILED,
})
// =========================================================================================================
export const fetchGrades = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService(CODE_TYPE.GRADE);
            if (res && res.errCode == 0) {
                dispatch(fetchGradesSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchGradesFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchGradesFailed());
        }
    }
}
export const fetchGradesSuccess = (gradesData) => ({
    type: actionTypes.FETCH_GRADES_SUCCESS,
    data: gradesData
})
export const fetchGradesFailed = () => ({
    type: actionTypes.FETCH_GRADES_FAILED,
})
// =========================================================================================================
export const fetchDifficulties = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService(CODE_TYPE.DIFFICULTY);
            if (res && res.errCode == 0) {
                dispatch(fetchDifficultiesSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchDifficultiesFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchDifficultiesFailed());
        }
    }
}
export const fetchDifficultiesSuccess = (difficultiesData) => ({
    type: actionTypes.FETCH_DIFFICULTIES_SUCCESS,
    data: difficultiesData
})
export const fetchDifficultiesFailed = () => ({
    type: actionTypes.FETCH_DIFFICULTIES_FAILED,
})
// =========================================================================================================
export const createUser = (data, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await createUserService(data);
            if (res && res.errCode == 0) {
                dispatch(fetchAllUsers());
                dispatch(createUserSuccess());
                toast.success("Created new user succesfully");
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
                toast.error("Failed to create new user");
                dispatch(createUserFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(createUserFailed());
            toast.error("Failed to create new user");
        }
    }
}
export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
})
// =========================================================================================================
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getUsers();
            if (res && res.errCode == 0) {
                dispatch(fetchAllUsersSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchAllUsersFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchAllUsersFailed());
        }
    }
}
export const fetchAllUsersSuccess = (dataUsers) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    data: dataUsers
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})
// =========================================================================================================
export const deleteUser = (userId, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode == 0) {
                dispatch(fetchAllUsers());
                dispatch(deleteUserSuccess());
                toast.success("Deleted the user succesfully");
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
                toast.error("Failed to delete the user");
                dispatch(deleteUserFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(deleteUserFailed());
            toast.error("Failed to delete the user");
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})
// =========================================================================================================
export const changeEditUser = (user) => ({
    type: actionTypes.CHANGE_EDIT_USER,
    data: user
})
export const saveEditUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode == 0) {
                dispatch(fetchAllUsers());
                dispatch(saveEditUserSuccess());
                toast.success("Edited the user succesfully");
            } else {
                console.log(res.errMessage);
                toast.error("Failed to edit the user");
                dispatch(saveEditUserFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(saveEditUserFailed());
            toast.error("Failed to edit the user");
        }
    }
}
export const saveEditUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const saveEditUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})
// =========================================================================================================
export const createQuestion = (data, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await createQuestionService(data);
            if (res && res.errCode == 0) {
                // dispatch(fetchAllUsers());
                dispatch(createQuestionSuccess());
                toast.success("Created new question succesfully");
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
                toast.error("Failed to create new question");
                dispatch(createQuestionFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(createQuestionFailed());
            toast.error("Failed to create new question");
        }
    }
}
export const createQuestionSuccess = () => ({
    type: actionTypes.CREATE_QUESTION_SUCCESS,
})
export const createQuestionFailed = () => ({
    type: actionTypes.CREATE_QUESTION_FAILED,
})
// =========================================================================================================
export const fetchAllQuestions = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getQuestionsService();
            if (res && res.errCode == 0) {
                dispatch(fetchAllQuestionsSuccess(res.data));
            } else {
                console.log(res.errMessage);
                dispatch(fetchAllQuestionsFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchAllQuestionsFailed());
        }
    }
}
export const fetchAllQuestionsSuccess = (dataQuestions) => ({
    type: actionTypes.FETCH_ALL_QUESTIONS_SUCCESS,
    data: dataQuestions
})
export const fetchAllQuestionsFailed = () => ({
    type: actionTypes.FETCH_ALL_QUESTIONS_FAILED,
})
// =========================================================================================================
export const changeEditQuestion = (question) => ({
    type: actionTypes.CHANGE_EDIT_QUESTION,
    data: question
})
export const saveEditQuestion = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editQuestionService(data);
            if (res && res.errCode == 0) {
                // dispatch(fetchAllUsers());
                dispatch(saveEditQuestionSuccess());
                toast.success("Edited the question succesfully");
            } else {
                console.log(res.errMessage);
                toast.error("Failed to edit the question");
                dispatch(saveEditQuestionFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(saveEditQuestionFailed());
            toast.error("Failed to edit the question");
        }
    }
}
export const saveEditQuestionSuccess = () => ({
    type: actionTypes.EDIT_QUESTION_SUCCESS,
})
export const saveEditQuestionFailed = () => ({
    type: actionTypes.EDIT_QUESTION_FAILED,
})
// =========================================================================================================
export const deleteQuestion = (questionId, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteQuestionService(questionId);
            if (res && res.errCode == 0) {
                dispatch(fetchAllQuestions());
                dispatch(deleteQuestionSuccess());
                toast.success("Deleted the question succesfully");
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
                toast.error("Failed to delete the question");
                dispatch(deleteQuestionFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(deleteQuestionFailed());
            toast.error("Failed to delete the question");
        }
    }
}
export const deleteQuestionSuccess = () => ({
    type: actionTypes.DELETE_QUESTION_SUCCESS,
})
export const deleteQuestionFailed = () => ({
    type: actionTypes.DELETE_QUESTION_FAILED,
})