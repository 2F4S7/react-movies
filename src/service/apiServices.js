import axios from 'axios';

const API = {
  API_KEY: 'b90627691cc7a267c30e7f49ed034634',
  BASE_URL: 'https://api.themoniedb.org/3',

  fetchTrendingMovies() {
    return axios
      .get(`${this.BASE_URL}/trending/all/day?api_key=${this.API_KEY}`)
      .then(response => response.data.results);
  },

  fetchMovieWithSearchQuery(query) {
    return axios
      .get(
        `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${query}`,
      )
      .then(response => response.data);
  },

  fetchMovieDetails(id) {
    return axios
      .get(`${this.BASE_URL}/movie/${id}/reviews?api_key=${this.API_KEY}`)
      .then(response => response.data.results);
  },

  fetchMovieCast(id) {
    return axios
      .get(`${this.BASE_URL}/movie/${id}/credits?api_key=${this.API_KEY}`)
      .then(response => response.data.cast);
  },
};

export default API;
