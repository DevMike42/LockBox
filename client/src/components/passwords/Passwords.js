import React, { Fragment, useContext } from 'react';
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
      {filtered !== null
        ? filtered.map(password => (
          <PasswordItem key={password.id} password={password} />
        ))
        : passwords.map(password => (
          <PasswordItem key={password.id} password={password} />
        ))}
    </Fragment>
  )
};

export default Passwords;
