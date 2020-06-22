import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';


const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logoutUser, user } = authContext;

  const onLogout = () => {
    logoutUser();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item text-light">Hello {user && user.name}</li>
      <li className="">
        <a onClick={onLogout} className="nav-link" href="#!">
          <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to='/register'>Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/login'>Login</Link>
      </li>
    </Fragment>
  );

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
            {isAuthenticated ? authLinks : guestLinks}
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