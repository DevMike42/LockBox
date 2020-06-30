import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import bgImg from './images/bg-landing-hero.png';
import createAccountImg from './images/landing-body-create-account.png';
import iconLock from './images/landing-body-icon-lock.png'
import iconShield from './images/landing-body-icon-shield.png'

const herostyling = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgrounAttachment: 'fixed',
  height: '100%'
};

const Landing = () => {
  return (
    <Fragment>
      <section id="hero" style={{ height: "65vh" }}>
        <div className="text-white d-flex align-items-center" style={herostyling} >
          <div className="mx-auto">
            <h1 className="display-4 text-center">Can't remember all your passwords?</h1>
            <h3 className="text-center">Welcome to the ultimate password manager!</h3>
          </div>
        </div>
      </section>
      <section id="landing-body" className="container">
        <div className="row my-5" style={{ height: '20vh' }}>
          <div className="col-12 d-flex align-items-center">
            <div className="mx-auto">
              <h1 className="text-primary text-center">
                <strong>How does it work?</strong>
              </h1>
              <p className="text-center lead">
                Manage all your passwords in two easy steps
            </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-xs-12 col-md-6 order-md-12 px-5 d-flex align-items-center my-3">
            <div className="text-center">
              <h1 className="text-secondary">Create an Account</h1>
              <p className="lead text-secondary">Sign up for a LockBox account, its free and its the only password you will ever need to remember!</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 order-sm-1 px-5 my-3">
            <img src={createAccountImg} alt="create_account" className="img-fluid" />
          </div>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="row my-5">
          <div className="col-xs-12 col-md-6 px-5 d-flex align-items-center my-3">
            <div className="text-center">
              <h1 className="text-secondary">Save your passwords to your vault</h1>
              <p className="lead text-secondary">Simply add all your password info in your vault. Your vault is securely encrypted. We promise.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 px-5 my-3">
            <img src={createAccountImg} alt="create_account" className="img-fluid" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12 d-flex-align-items-center my-5">
            <div className="mx-auto">
              <h1 id="leader-banner" className="text-primary text-center">
                <strong>Leader in Security</strong>
              </h1>
              <p className="lead text-secondary text-center">As a password manager, our first priority is safeguarding your data. We've build LockBox so that all your data is safely encrypted and even WE can't see your secrets.</p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-xs-12 col-md-6 order-md-12 px-3 d-flex align-items-center my-3 text-center">
            <div>
              <h1 className="text-secondary">Absolute Protection</h1>
              <p className="lead text-secondary">The information stored in your vault is kept secret, even from LockBox. Through local encryption we assure you, your information is secure and protected. Your master password is the key used to encrypt and decrypt the information and is inaccessible to anyone but you.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 order-sm-1 px-3 my-3 text-center">
            <img src={iconShield} alt="create_account" className="img-fluid w-50" />
          </div>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="row my-5">
          <div className="col-xs-12 col-md-6 px-3 d-flex align-items-center my-3 text-center">
            <div>
              <h1 className="text-secondary">Powerful Encryption</h1>
              <p className="lead text-secondary">By using an AES (Advanced Encryption System) algorithm with a 256-bit encryption key, we are able to thoroughly protect and secure user info. Using this, madPass keeps your information private, secure, and hidden (even from us).</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 px-3 my-3 text-center">
            <img src={iconLock} alt="create_account" className="img-fluid w-50" />
          </div>
        </div>
        <div className="row my-5">
          <Link className="btn btn-primary btn-lg mx-auto" to="/register">Get LockBox Now</Link>
        </div>
      </section>
    </Fragment>
  )
}

export default Landing;
