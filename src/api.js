import axios from 'axios';

const API = axios.create({
  baseURL: 'https://infobackend.vercel.app/api/',
});

export default API;
