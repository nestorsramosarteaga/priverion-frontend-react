import axios from "axios";
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const backendApi = axios.create({
    baseURL: VITE_API_URL,
});

backendApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Accept': 'application/json',
        'Authorization' :`Bearer ${localStorage.getItem('token')}`,
    }

    return config;
}) 


export default backendApi;