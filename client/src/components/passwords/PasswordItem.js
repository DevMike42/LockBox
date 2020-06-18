import React from 'react';
import PropTypes from 'prop-types';

const PasswordItem = ({ password }) => {
  // Destructure needed data from password Prop
  const { id, name, loginId, sitePassword, link, notes } = password;

  return (
    <div className="card bg-light mb-3 p-3">
      <h3 className="text-dark text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={'badge badge-secondary'}>test</span>
      </h3>
      <ul className="list-unstyled">
        {loginId && (<li>
          <i className="fas fa-user"></i> {loginId}
        </li>)}
        {sitePassword && (<li>
          <i className="fas fa-key"></i> {sitePassword}
        </li>)}
        {link && (<li>
          <i className="fas fa-link"></i> {link}
        </li>)}
        {notes && (<li>
          <i className="fas fa-clipboard"></i> {notes}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm ml-2">Delete</button>
      </p>
    </div>
  )
};

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired
};

export default PasswordItem;
