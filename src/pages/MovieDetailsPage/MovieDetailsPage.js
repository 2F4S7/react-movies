import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import API from '../../service/apiServices';
import Reviews from '../../components/Reviews/Reviews';
import routes from '../../routes';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCardNavAdds from '../../components/MovieCardNavAdds/MovieCardNavAdds';
import Cast from '../../components/Cast/Cast';

class MovieDetailPage extends Component {
  state = {
    poster_path: '',
    title: '',
    vote_average: '',
    overview: '',
    genres: [],
  };

  componentDidMount() {
    API.fetchMovieDetails(this.props.match.params.movieId).then(data =>
      this.setState({ ...data }),
    );
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(`${routes.home}`);
  };

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;
    const { movieId } = this.props.match.params;
    const { location } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <MovieCard
          porter={poster_path}
          title={title}
          rating={vote_average}
          descr={overview}
          genres={genres}
        />
        <h2>Additional information</h2>
        <MovieCardNavAdds id={movieId} location={location} />
        <Router
          path={`${routes.cast}`}
          render={props => {
            return <Cast movieId={props.match.params.movieId} />;
          }}
        />
        <Router
          path={`${routes.reviews}`}
          render={props => {
            return <Reviews movieId={props.match.params.movieId} />;
          }}
        />
      </>
    );
  }
}

export default MovieDetailPage;
