import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

import PasswordState from './context/password/PasswordState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <PasswordState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path='/' component={Landing} />
                <PrivateRoute exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </PasswordState>
    </AuthState>
  );
}

export default App;
