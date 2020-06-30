import React, { useState, useContext, useEffect } from 'react';
import PasswordContext from '../../context/password/passwordContext';

const PasswordForm = () => {
  const passwordContext = useContext(PasswordContext);

  const {
    addPassword,
    updatePassword,
    current,
    clearCurrent
  } = passwordContext;

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

  const submitForm = e => {
    e.preventDefault();
    if (current === null) {
      addPassword(password);
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
    <form>
      <div className="modal-header mb-2">
        <h2 className="text-dark text-center">{current ? 'Edit' : 'Add'} Account</h2>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
          value={name || ''}
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
          value={loginId || ''}
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
          value={sitePassword || ''}
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
          value={link || ''}
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
          value={notes || ''}
          onChange={onChange}
        >
        </textarea>
      </div>
      <div>
        <input
          type="button"
          className="btn btn-primary"
          value={current ? 'Save Changes' : 'Add Account'}
          onClick={submitForm}
          data-dismiss="modal"
        />
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
