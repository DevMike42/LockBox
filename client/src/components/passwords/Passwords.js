import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PasswordItem from './PasswordItem';
import PasswordContext from '../../context/password/passwordContext';

const Passwords = () => {
  const passwordContext = useContext(PasswordContext);

  const { passwords, filtered } = passwordContext;

  if (passwords.length === 0) {
    return <h4>Please add a Password</h4>
  }

  return (
    <Fragment>
      <TransitionGroup className="row">
        {filtered !== null
          ? filtered.map(password => (
            <CSSTransition key={password.id} timeout={500} classNames="item" >
              <PasswordItem password={password} />
            </CSSTransition>
          ))
          : passwords.map(password => (
            <CSSTransition key={password.id} timeout={500} classNames="item" >
              <PasswordItem key={password.id} password={password} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Fragment>
  )
};

export default Passwords;
