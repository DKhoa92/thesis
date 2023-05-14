import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getUsers = (id) => {
    // return axios.get('/api/get-users', { id })
    return axios.get(`/api/get-users?id=${id}`);
}

const getAllCodeService = (type) => {
    return axios.get(`/api/allcode?type=${type}`);
}

const createUserService = (data) => {
    return axios.post('api/create-user', data);
}

export {
    handleLoginApi,
    getUsers,
    getAllCodeService,
    createUserService
}