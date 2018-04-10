import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const AppHeader = () => (
    <header>
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about-us" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/resource" className="navbar-link">Resource</Link>
            </li>
            <li className="navbar-item" >
              <Link to="/login" className="navbar-link">Sign out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
);

AppHeader.propTypes = {
    
};

export default AppHeader;