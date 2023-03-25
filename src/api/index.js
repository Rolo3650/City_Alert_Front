import axios from "axios";
import { config } from '../utils/config';

const api =
    axios.create({
        baseURL: config.URL_BACK,
        headers: {},
    });

export default api;