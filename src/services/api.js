import axios from 'axios';

const apiKey = 'c8f7cd16704a6919f020858ce0e465bc';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

export default api;
