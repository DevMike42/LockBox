import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PasswordContext from '../../context/password/passwordContext';

const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const passwordContext = useContext(PasswordContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearPasswords } = passwordContext;

  const onLogout = () => {
    logoutUser();
    clearPasswords();
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
        <Link className="nav-link" to='/login'>Login</Link>
      </li>
      <li className="nav-item ml-3">
        <Link className="nav-link btn btn-primary btn-sml text-white" to='/register'>Get Lockbox Free</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg py-4">
      <div className="container">
        <div className="navbar-brand">
          <Link className="text-white" to='/'>
            <i className={icon} />
            <span className="ml-3">{title}</span>
          </Link>
        </div>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
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