import axios from "axios";
import { getEnvVariables } from '../helpers';

const { CRUD_API_URL } = getEnvVariables();

const backendApiV1 = axios.create({
    baseURL: CRUD_API_URL,
});

// TODO: config intercepters

export default backendApiV1;