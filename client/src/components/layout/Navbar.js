import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg py-4">
      <div className="container">
        <div className="navbar-brand">
          <i className={icon} /> {title}
        </div>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse w-75">
          <ul className="navbar-nav d-flex align-items-center ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'LockBox',
  icon: 'fas fa-lock'
};

export default Navbar;