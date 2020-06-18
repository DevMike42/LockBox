import {
  ADD_PASSWORD,
  DELETE_PASSWORD,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PASSWORD,
  FILTER_PASSWORDS,
  CLEAR_FILTER
} from '../types';


export default (state, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        passwords: [...state.passwords, action.payload]
      }
    case DELETE_PASSWORD:
      return {
        ...state,
        passwords: state.passwords.filter(password => password.id !== action.payload)
      }
    default:
      return state;
  }
}