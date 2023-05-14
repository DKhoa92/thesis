import actionTypes from "./actionTypes";
import { getUsers, createUserService, deleteUserService } from "../../services/userService";
import { toast } from "react-toastify";

export const fetchGenders = (dataGender) => ({
    type: actionTypes.FETCH_GENDERS,
    data: dataGender
})

export const fetchRoles = (dataRole) => ({
    type: actionTypes.FETCH_ROLES,
    data: dataRole
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
export const createUserSuccess = (dataUsers) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
    data: dataUsers
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
export const deleteUserSuccess = (dataUsers) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    data: dataUsers
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})
// =========================================================================================================