import api from "../index";

const GET_POSTAL_CODES = () => api.get('get-postal-codes');
const GET_POSTAL_CODES_BY_STATE = (params) => api.get(`get-postal-codes-by-id-state?id=${params.id}`);

const GET_STATES = () => api.get('get-states');

const GET_MUNICIPALITIES = () => api.get('get-municipalities');

const GET_SETTLEMENTS_BY_MUNICIPALITY = (params) => api.get(`get-settlements-by-id-municipality?id=${params.id}`);
const GET_SETTLEMENTS_BY_PC = (params) => api.get(`get-settlements-by-id-pc?id=${params.id}`);

export {
    GET_POSTAL_CODES,
    GET_POSTAL_CODES_BY_STATE,

    GET_STATES,

    GET_MUNICIPALITIES,
    
    GET_SETTLEMENTS_BY_MUNICIPALITY,
    GET_SETTLEMENTS_BY_PC
}