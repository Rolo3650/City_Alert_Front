import api from "../index";

const GET_USERS = () => api.get('get-users');
const GET_USER = (params) => api.post('get-user', params);
const USER_REGISTERED = (params) => api.post('users-registered', params);

const LOGIN = (params) => api.post('sign-in', params);

const GET_SEXS = () => api.get('get-sexs');

const SIGN_UP = (params) => api.post('sign-up', params);
const EDIT_USER = (params) => api.post('user-update', params);

export {
    GET_USERS,
    GET_USER,
    LOGIN,
    GET_SEXS,
    USER_REGISTERED,
    SIGN_UP,
    EDIT_USER
};