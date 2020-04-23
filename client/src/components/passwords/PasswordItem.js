import React from 'react';
import PropTypes from 'prop-types';

const PasswordItem = ({ password }) => {
  const { id, name, loginId, sitePassword, link, notes } = password;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={'badge badge-primary'}>test</span>
      </h3>
      <ul className="list">
        {loginId && (<li>
          <i className="fas fa-user"></i> {loginId}
        </li>)}
        {sitePassword && (<li>
          <i className="fas fa-key"></i> {sitePassword}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  )
};

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired
};

export default PasswordItem;
