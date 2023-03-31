import axios from "axios";
import { config } from '../utils/config';

const api =
    axios.create({
        baseURL: config.URL_BACK,
        headers: {
            Accepted: 'appication/json',
            'Content-Type': 'application/json'
        },
    });

export default api;