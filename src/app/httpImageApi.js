import axios from 'axios';

const token = localStorage.getItem('accessToken');
const httpImageApi = axios.create({
  baseURL: 'http://192.168.97.6:2002/',
  timeout: 1000,
  headers: {
    'content-type': 'multipart/form-data',
    Authorization: `Bearer, ${token}`,
  },
});

export default httpImageApi;
