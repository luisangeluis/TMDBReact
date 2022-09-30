import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TMDB Api
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tv"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Tv shows
              </NavLink>
            </li>

            {/* <li class="nav-item">
              <a class="nav-link " aria-current="page" href="hola">
                hola
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Movies
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link">Tv shows</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
