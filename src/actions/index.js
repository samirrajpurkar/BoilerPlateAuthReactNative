import firebase from 'firebase';
import {
  EMAILED_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNIN_USER_FAIL,
  LOGIN_USER
} from './Types';

// eslint-disable-next-line import/prefer-default-export
export const emailChanged = text => ({
  type: EMAILED_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      loginUserSuccess(dispatch, user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        signinUserFail(dispatch, errorMessage);
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            loginUserSuccess(dispatch, user);
          })
          .catch((err) => {
            const errMessage = err.message;
            loginUserFail(dispatch, errMessage);
          });
      }
    });
};

const signinUserFail = (dispatch, error) => {
  dispatch({
    type: SIGNIN_USER_FAIL,
    payload: error,
  });
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error,
  });
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
