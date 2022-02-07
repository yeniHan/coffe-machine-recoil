import axios from 'axios';

let Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

Axios.interceptors.response.use((response) => response, (error) => {
    alert(`Error: ${error.message}`);
});

export default Axios;
