import actionTypes from "./actionTypes";

export const fetchGenders = (dataGender) => ({
    type: actionTypes.FETCH_GENDERS,
    data: dataGender
})

export const fetchRoles = (dataRole) => ({
    type: actionTypes.FETCH_ROLES,
    data: dataRole
})