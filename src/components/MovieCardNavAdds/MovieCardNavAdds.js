import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';

function MovieCardNavAdds({ id, location }) {
  return (
    <ul>
      <li>
        <Link
          to={{
            pathname: `${routes.movies}/${id}/cast`,
            state: { from: location.state.from },
          }}
        >
          Cast
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: `${routes.movies}/${id}/reviews`,
            state: { from: location.state.from },
          }}
        >
          Reviews
        </Link>
      </li>
    </ul>
  );
}

export default withRouter(MovieCardNavAdds);
