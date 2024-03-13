import axios from 'axios';

const token = localStorage.getItem('accessToken');

// const httpApi = axios.create({
//   baseURL: 'http://192.168.97.6:2002/',
//   'X-CustomHeader': 'foobar',
//   'Access-Control-Aloow-Origin': '*',
//   'Content-Type': 'application/x-www-form-urlencode',
//   timeout: 1000,
//   headers: {
//     Authorization: `Bearer, ${token}`,
//   },
// });

const httpApi = axios.create({
  baseURL: 'http://192.168.97.6:2002/',
  timeout: 1000,
  headers: {
    Accept: '*/*',
  },
});

export default httpApi;
