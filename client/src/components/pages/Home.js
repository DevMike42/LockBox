import React from 'react';
import Passwords from '../passwords/Passwords';
import PasswordForm from '../passwords/PasswordForm';

const Home = () => {
  return (
    <div className="d-flex">
      <div className="col-6 my-5">
        <PasswordForm />
      </div>
      <div className="col-6 my-5">
        <Passwords />
      </div>
    </div>
  )
};

export default Home;
