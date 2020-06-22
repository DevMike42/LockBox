import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    masterPassword: '',
    passwordReminder: ''
  });

  const { name, email, masterPassword, passwordReminder } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || masterPassword === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (masterPassword !== passwordReminder) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('Register Submit');
    }

  };

  return (
    <div className="container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="masterPassword">Password</label>
          <input
            className="form-control"
            type="password"
            name="masterPassword"
            value={masterPassword}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordReminder">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="passwordReminder"
            value={passwordReminder}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default Register;
