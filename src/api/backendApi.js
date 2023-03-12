import axios from "axios";
import { getEnvVariables } from '../helpers';

const { CRUD_API_URL } = getEnvVariables();

const backendApi = axios.create({
    baseURL: CRUD_API_URL,
});

// TODO: config intercepters

export default backendApi;