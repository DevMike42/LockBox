import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect
      props.history.push('/home');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    masterPassword: '',
    confirmPassword: ''
  });

  const { name, email, masterPassword, confirmPassword } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || masterPassword === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (masterPassword !== confirmPassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        masterPassword
      });
    }

  };

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="py-5 mx-auto text-secondary col-md-6">
        <h1>
          Join us for <span className="text-primary">FREE!</span>
        </h1>
        <p className="lead mb-4">Don't worry, LockBox is forever free! We promise. Just sign up below and experience the magic.</p>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-primary w-25"
          />
        </form>
      </div>
    </div>
  )
}

export default Register;
