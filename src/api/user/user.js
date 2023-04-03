import api from "../index";

const GET_USERS = () => api.get('get-users');
const LOGIN = (params) => api.post('sign-in', params);
const GET_SEXS = () => api.get('get-sexs');

export {
    GET_USERS,
    LOGIN,
    GET_SEXS
};