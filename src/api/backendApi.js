import axios from "axios";
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const backendApi = axios.create({
    baseURL: VITE_API_URL,
});

// TODO: config intercepters

export default backendApi;