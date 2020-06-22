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
    case UPDATE_PASSWORD:
      return {
        ...state,
        passwords: state.passwords.map(password => password.id === action.payload.id ? action.payload : password)
      }
    case DELETE_PASSWORD:
      return {
        ...state,
        passwords: state.passwords.filter(password => password.id !== action.payload)
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_PASSWORDS:
      return {
        ...state,
        filtered: state.passwords.filter(password => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return password.name.match(regex);
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    default:
      return state;
  }
}