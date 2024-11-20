// config/apiConfig.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://apiwebcafe.somee.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
