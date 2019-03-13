import {
  EMAILED_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNIN_USER_FAIL,
} from '../actions/Types';

const INTIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAILED_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_USER:
      return {
        ...state, loading: true, error: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state, user: action.payload, error: '', loading: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    case SIGNIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
