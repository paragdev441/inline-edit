import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} class="navbar-brand" href="#">
        In-Place Editing
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to={'/'} class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link to={'/text-in-place'} class="nav-link" href="#">
              TextInPlace
            </Link>
          </li>
          <li class="nav-item">
            <Link to={'/select-in-place'} class="nav-link" href="#">
              SelectInPlace
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link class="nav-link disabled" href="#">
              Disabled
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
