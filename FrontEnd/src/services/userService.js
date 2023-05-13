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

export {
    handleLoginApi,
    getUsers,
    getAllCodeService
}