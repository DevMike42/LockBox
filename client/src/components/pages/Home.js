import React from 'react';
import Passwords from '../passwords/Passwords';
import PasswordForm from '../passwords/PasswordForm';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto my-5">
          <PasswordForm />
        </div>
      </div>
      <div className="row">
        <Passwords />
      </div>
    </div>
  )
};

export default Home;
