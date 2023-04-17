import api from "../index";

// publications
const GET_ALL_PUBLICATIONS = () => api.get('get-publications');

// coments
const ADD_COMENT = (params) => api.post('create-coment', params);

export {
    GET_ALL_PUBLICATIONS,
    ADD_COMENT
}