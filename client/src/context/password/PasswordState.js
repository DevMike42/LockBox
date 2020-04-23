// For gaining access to State and Dispatch
import React, { useReducer } from 'react';
// For generating a random id
import uuid from 'uuid';

import PasswordContext from './passwordContext';
import passwordReducer from './passwordReducer';
import {
  ADD_PASSWORD,
  DELETE_PASSWORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PASSWORD,
  FILTER_PASSWORDS,
  CLEAR_FILTER
} from '../types';

const PasswordState = props => {
  const initialState = {
    passwords: [
      {
        id: 1,
        name: "Site 1",
        loginId: "username1",
        sitePassword: "password1",
        link: "www.site1.com",
        notes: "Notes for Site 1"
      },
      {
        id: 2,
        name: "Site 2",
        loginId: "username2",
        sitePassword: "password2",
        link: "www.site2.com",
        notes: "Notes for Site 2"
      },
      {
        id: 3,
        name: "Site 3",
        loginId: "username3",
        sitePassword: "password3",
        link: "www.site3.com",
        notes: "Notes for Site 3"
      },
    ]
  }

  // state - allows to access anything in state
  // dispatch - allows to dispatch object to reducer
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  // Add Password

  // Delete Password

  // Set Current Password

  // Clear Current Password

  // Update Password

  // Filter Passwords

  // Clear Filter


  return (
    <PasswordContext.Provider
      value={{
        passwords: state.passwords
      }}>
      {props.children}
    </PasswordContext.Provider>
  )
};

export default PasswordState;