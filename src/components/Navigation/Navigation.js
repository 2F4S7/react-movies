import { NavLink } from 'react-router-dom';
import routes from '../../routes.js';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className="List">
        <li>
          <NavLink
            exact
            className="Link"
            activeClassName="ActiveLink"
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="Link"
            activeClassName="ActiveLink"
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
