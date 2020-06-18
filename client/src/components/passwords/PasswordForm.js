import React, { useState, useContext, useEffect } from 'react';
import PasswordContext from '../../context/password/passwordContext';

const PasswordForm = () => {
  const passwordContext = useContext(PasswordContext);

  const { addPassword, updatePassword, current, clearCurrent } = passwordContext;

  useEffect(() => {
    if (current !== null) {
      setPassword(current);
    } else {
      setPassword({
        name: '',
        loginId: '',
        sitePassword: '',
        link: '',
        notes: ''
      });
    }
  }, [passwordContext, current]);

  const [password, setPassword] = useState({
    name: '',
    loginId: '',
    sitePassword: '',
    link: '',
    notes: ''
  });

  const { name, loginId, sitePassword, link, notes } = password

  const onChange = e => setPassword({ ...password, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPassword(password);
      document.getElementById('addPasswordModal').modal('hide');
    } else {
      updatePassword(password);
    }

    setPassword({
      name: '',
      loginId: '',
      sitePassword: '',
      link: '',
      notes: ''
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="modal-header mb-2">
        <h2 className="text-dark text-center">{current ? 'Edit' : 'Add'} Password</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="name">Site Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter a nickname for this site"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginId">Login ID</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter a Username or Login ID"
          name="loginId"
          value={loginId}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sitePassword">Site Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter the password for this site"
          name="sitePassword"
          value={sitePassword}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="link">Site URL</label>
        <input
          className="form-control"
          type="text"
          placeholder="www.example.com"
          name="link"
          value={link}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Site Notes</label>
        <textarea
          className="form-control"
          type="textarea"
          placeholder="Notes"
          name="notes"
          value={notes}
          onChange={onChange}
        >
        </textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          {current ? 'Save Changes' : 'Add Password'}
        </button>
        {current && (
          <button className="btn btn-secondary ml-3" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>

    </form>
  )
}

export default PasswordForm;
