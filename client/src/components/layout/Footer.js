import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="bg-dark text-white-50 mt-5 p-2">
      <div className="container text-center p-3">
        <p className="m-0">&copy; 2020 LockBox. All rights reserved.</p>
        <p className="font-italic mb-1">Created and Designed by <a href="https://github.com/DevMike42" target="_blank" className="text-light">Mike Rivera</a></p>
        <p className="m-0">Find us on</p>
        <a href="https://github.com/DevMike42/LockBox" target="_blank" className="text-light"><i className="fab fa-github fa-3x"></i></a>
      </div>
    </div>
  )
}

export default Footer;
