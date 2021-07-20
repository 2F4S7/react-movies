import React, { Component } from 'react';
import API from '../../service/apiServices';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    API.fetchMovieCast(this.props.movieId).then(cast =>
      this.setState({ cast: cast }),
    );
  }

  render() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w300';
    return (
      <ul>
        {this.state.cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <div>
              <img src={`${IMG_URL}/${profile_path}`} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
