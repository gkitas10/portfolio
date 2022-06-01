import axios from 'axios';

let baseURL = '';

const axiosClient = axios.create({
    baseURL:'https://api.vercel.com'
});

export default axiosClient;