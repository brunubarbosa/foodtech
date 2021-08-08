import axios from 'axios';
import Qs from 'qs';


const baseConfiguration = axios.create({
  baseURL: '',
  timeout: 360 * 1000,
  paramsSerializer: (params) =>
    Qs.stringify(params, {arrayFormat: 'repeat'}),
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

const api = (url, {method = 'get', data, params} = {}) =>
  baseConfiguration({
    method: method,
    data: data,
    url: url,
    params: params
  }).catch((err) => {
    throw err;
  });
export default api;
