import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <h1> MHD </h1>
      </Link>
      <div className="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a href="/" className="navbar-item">
          One
        </a>
        <a href="/" className="navbar-item">
          Two 
        </a>
        <a href="/" className="navbar-item">
          Three
        </a>
      </div>

      <div className="navbar-end">
        <a href="/" className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <div className="bd-tw-button button">
                <span> Hey </span>
              </div>
            </p>
          </div> 
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
