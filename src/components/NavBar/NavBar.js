import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink exact to={routes.home}>
          Home
        </NavLink>
        <NavLink to={routes.movies}>Movies</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
