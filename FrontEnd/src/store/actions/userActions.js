import { googleLoginService } from '../../services/userService';
import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

export const googleLogin = (email, successCallback = null) => {
    return async (dispatch, getState) => {
        try {
            let res = await googleLoginService(email);
            if (res && res.errCode === 0) {
                dispatch(googleLoginSuccess(res));
                successCallback && successCallback();
            } else {
                console.log(res.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const googleLoginSuccess = (data) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    data: data
})