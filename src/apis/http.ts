import { User } from '@modles/user';
import axios from 'axios';

const host = process.env.REACT_APP_API_URL;

const http = axios.create({
  baseURL: host,
});

http.interceptors.request.use(function (config) {
  if (!config.headers) return config;

  const string_data = localStorage.getItem('user');

  if (!string_data) return config;

  const { id }: User = JSON.parse(string_data);
  config.headers.Authorization = `id=${id}`;

  return config;
});

export default http;
