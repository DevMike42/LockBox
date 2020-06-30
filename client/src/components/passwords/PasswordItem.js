import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PasswordContext from '../../context/password/passwordContext';

const PasswordItem = ({ password }) => {
  const passwordContext = useContext(PasswordContext);

  // Destructure needed data from password Prop
  const { _id, name, loginId, sitePassword, link, notes } = password;

  const { deletePassword, setCurrent, clearCurrent } = passwordContext;

  const onDelete = () => {
    deletePassword(_id);
    clearCurrent();
  };

  const hidePassword = (password) => {
    const passArr = password.split('');
    const hiddenPassArr = passArr.map(char => char = '*');
    return hiddenPassArr.join('');
  };

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card bg-light mb-3 p-3 bg-white">
        <h3 className="text-dark text-left mb-3">
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={'badge badge-secondary'}>test</span>
        </h3>
        <ul className="list-unstyled">
          {loginId && (<li className="mb-2">
            <i className="fas fa-user"></i> {loginId}
          </li>)}
          {sitePassword && (<li className="mb-2">
            <i className="fas fa-key"></i> {hidePassword(sitePassword)}
          </li>)}
          {link && (<li className="mb-2">
            <i className="fas fa-link"></i> {link}
          </li>)}
          {notes && (<li className="mb-2">
            <i className="fas fa-clipboard"></i> {notes}
          </li>)}
        </ul>
        <p>
          <button className="btn btn-dark btn-sm" data-toggle="modal" data-target="#addPasswordModal" onClick={() => setCurrent(password)}>Edit</button>
          <button className="btn btn-danger btn-sm ml-2" onClick={onDelete}>Delete</button>
        </p>
      </div>
    </div>
  )
};

PasswordItem.propTypes = {
  password: PropTypes.object.isRequired
};

export default PasswordItem;
