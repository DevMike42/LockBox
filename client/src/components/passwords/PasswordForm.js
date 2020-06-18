import React, { useState, useContext } from 'react';
import PasswordContext from '../../context/password/passwordContext';

const PasswordForm = () => {
  const passwordContext = useContext(PasswordContext);

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

    passwordContext.addPassword(password);
    setPassword({
      name: '',
      loginId: '',
      sitePassword: '',
      link: '',
      notes: ''
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-dark text-center">Add Password</h2>
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
        <input type="submit" value="Add Password" className="btn btn-primary btn-block" />
      </div>
    </form>
  )
}

export default PasswordForm;
