import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect
      props.history.push('/home');
    }

    if (error === 'Invalid Credentials: A user with that email does not exist') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    masterPassword: ''
  });

  const { email, masterPassword } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || masterPassword === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      loginUser({
        email,
        masterPassword
      });
    }
  };

  return (
    <div className="container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default Login;
