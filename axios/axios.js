import axios from 'axios';

let baseURL = '';

// if(process.env.NODE_ENV === 'production'){
//     baseURL = 'https://habits-app-back.herokuapp.com' 
// }else {
//     baseURL = 'http://localhost:4000'
// }



const axiosClient = axios.create({
    baseURL:'pages/api/'/* http://localhost:3000 */
});

export default axiosClient;