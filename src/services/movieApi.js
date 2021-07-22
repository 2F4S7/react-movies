import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b90627691cc7a267c30e7f49ed034634';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrendingMovies = () => {
  return axios.get(`/movie/popular`).catch(error => error);
};

const fetchSearchMovies = ({ searchQuery = '' }) => {
  return axios
    .get(`/search/movie?query=${searchQuery}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchMovieCast = movieId => {
  return axios
    .get(`/movie/${movieId}/credits`)
    .then(({ data }) => data)
    .catch(error => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchMovieCast,
};
