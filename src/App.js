import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import React, { Suspense, lazy } from 'react';
import routes from './routes';
import Loader from 'react-loader-spinner';
import Container from './components/Container';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home_page" */),
);

const MovieDetailPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "home_detail_page" */
  ),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviePage/MoviePage' /* webpackChunkName: "movie_page" */),
);

function App() {
  return (
    <Container>
      <NavBar />
      <Suspense
        fallback={
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.detailsMovies} component={MovieDetailPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
