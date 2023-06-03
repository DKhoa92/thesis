import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getUsers = (id) => {
    return axios.get(`/api/get-users?id=${id}`);
}

const getAllCodeService = (type) => {
    return axios.get(`/api/allcode?type=${type}`);
}

const createUserService = (dataUser) => {
    return axios.post('api/create-user', dataUser);
}

const editUserService = (dataUser) => {
    return axios.post('api/edit-user', dataUser);
}

const deleteUserService = (userId) => {
    return axios.delete('api/delete-user', {
        data: { id: userId }
    });
}

const googleLoginService = (email) => {
    return axios.post('api/google-login', {
        email: email
    });
}


export {
    handleLoginApi,
    getUsers,
    getAllCodeService,
    createUserService,
    deleteUserService,
    editUserService,
    googleLoginService
}