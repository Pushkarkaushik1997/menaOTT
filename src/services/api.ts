import axios from 'axios';
import { TMDB_BASE_URL } from 'src/Config/config';

const TMDB_API = process.env.TMDB_BASE_URL || TMDB_BASE_URL;

const BEARER_TOKEN = process.env.TMDB_API_KEY || null;

if (!BEARER_TOKEN) {
  throw new Error('REACT_APP_TMDB_BEARER_TOKEN is not defined in the environment variables.');
}

const api = axios.create({
  baseURL: TMDB_API,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

export default api;
