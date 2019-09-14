import axios from 'axios';

const API = axios.create({
    baseURL: process.env.REACT_APP_URL_API
});

API.defaults.headers.common['Content-Type'] = 'application/json';
API.defaults.headers.common['Authorization'] = 'Client-ID ' + process.env.REACT_APP_ACCESS_TOKEN;

export default API;
