import axios from 'axios';

let baseURL = '';

const axiosClient = axios.create({
    baseURL:''
});

export default axiosClient;