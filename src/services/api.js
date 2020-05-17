import axios from 'axios';

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/'
});

export default api;