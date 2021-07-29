
import axios from 'axios'; // 引入axios

// config
let baseURL='https://api.example.com';
axios.defaults.baseURL = baseURL;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;

