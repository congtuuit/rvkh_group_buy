// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reviewkhoahoc.net',
  timeout: 10000, // Optional: specify a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
