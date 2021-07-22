import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import moviesApi from '../../services/movieApi';
import s from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTrendingMovies()
      .then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { location } = this.props;

    return (
      <main className={s.main}>
        <h2 className={s.title}>Trending today</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default HomePage;
