import React, { Fragment, useContext } from 'react';
import PasswordItem from './PasswordItem';
import PasswordContext from '../../context/password/passwordContext';

const Passwords = () => {
  const passwordContext = useContext(PasswordContext);

  const { passwords } = passwordContext;

  return (
    <Fragment>
      {passwords.map(password => (
        <PasswordItem key={password.id} password={password} />
      ))}
    </Fragment>
  )
};

export default Passwords;
