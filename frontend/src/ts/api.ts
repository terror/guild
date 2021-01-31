import axios from 'axios';

export const baseURL = process.env.REACT_APP_PROD
    ? '/api'
    : 'http://localhost:5000/api';

export const api = axios.create({
    withCredentials: true,
    baseURL: baseURL,
});
