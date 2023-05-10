import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getUsers = (id) => {
    // return axios.get('/api/get-users', { id })
    return axios.get(`/api/get-users?id=${id}`);
}

export { handleLoginApi, getUsers }