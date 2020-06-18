import React, { useContext } from 'react';
import Passwords from '../passwords/Passwords';
import PasswordForm from '../passwords/PasswordForm';


const Home = () => {

  return (
    <div className="container">
      <button className="btn btn-primary btn-block my-5" data-toggle="modal" data-target="#addPasswordModal">Add Password</button>
      <div className="modal fade" id="addPasswordModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <PasswordForm />
          </div>
        </div>
      </div>

      <div className="row">
        <Passwords />
      </div>
    </div>
  )
};

export default Home;
