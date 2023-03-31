import api from "../index";

const GET_USERS = () => api.get('get-users');
const LOGIN = (params) => api.post('sign-in', params)

export {
    GET_USERS,
    LOGIN
};