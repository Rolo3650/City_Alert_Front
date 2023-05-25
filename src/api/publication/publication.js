import api from "../index";

// publications
const GET_ALL_PUBLICATIONS = () => api.get('get-publications');
const GET_ALL_PUBLICATIONS_BY_SETTLEMENT = (params) => api.post('get-publications-by-settlement', params);
const CREATE_PUBLICATION = (params) => api.post('create-publication', params);

// coments
const ADD_COMENT = (params) => api.post('create-coment', params);

// publication types
const GET_PUBLICATION_TYPES = () => api.get('get-publication-types');

export {
    GET_ALL_PUBLICATIONS,
    ADD_COMENT,
    GET_PUBLICATION_TYPES,
    CREATE_PUBLICATION,
    GET_ALL_PUBLICATIONS_BY_SETTLEMENT
}