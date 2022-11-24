import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-custom-green">
      <div className="container-fluid p-3 p-lg-1">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
            {/* <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-bolder' : 'nav-link text-white'
                }
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tv"
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-bolder' : 'nav-link text-white'
                }
              >
                Tv shows
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
