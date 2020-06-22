import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PasswordItem from './PasswordItem';
import Spinner from '../layout/Spinner'
import PasswordContext from '../../context/password/passwordContext';

const Passwords = () => {
  const passwordContext = useContext(PasswordContext);

  const { passwords, filtered, getPasswords, loading } = passwordContext;

  useEffect(() => {
    getPasswords();
    // eslint-disable-next-line
  }, []);

  if (passwords !== null && passwords.length === 0 && !loading) {
    return <h4>Please add a Password</h4>
  }

  return (
    <Fragment>
      {passwords !== null && !loading ? (
        <TransitionGroup className="row">
          {filtered !== null
            ? filtered.map(password => (
              <CSSTransition
                key={password._id}
                timeout={500}
                classNames="item"
              >
                <PasswordItem password={password} />
              </CSSTransition>
            ))
            : passwords.map(password => (
              <CSSTransition
                key={password._id}
                timeout={500}
                classNames="item"
              >
                <PasswordItem key={password.id} password={password} />
              </CSSTransition>
            ))}
        </TransitionGroup>) : <Spinner />}

    </Fragment>
  )
};

export default Passwords;
