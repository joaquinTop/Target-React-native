import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import { alertErrors } from '../utils/helpers';
import * as messages from '../constants/messages';
import * as types from './actionTypes';

export const submitSignUp = () => ({
  type: types.SUBMIT_SIGNUP
});

export const SignUpSuccess = () => ({
  type: types.SIGNUP_SUCCESS
});

export const SignUpError = () => ({
  type: types.SIGNUP_ERROR
});

export const submitLogin = () => ({
  type: types.SUBMIT_LOGIN
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const loginError = () => ({
  type: types.LOGIN_ERROR
});

export const signUp = user =>
  (dispatch) => {
    dispatch(submitSignUp());
    return userApi.signUp({ user })
    .then((user) => {
      sessionService.saveUser(user)
      .then(() => dispatch(SignUpSuccess()));
    }).catch(() => {
      dispatch(SignUpError());
      alertErrors(messages.signUpError);
    });
  };

export const login = user =>
  (dispatch) => {
    dispatch(submitLogin());
    return userApi.login({ user })
    .then((user) => {
      sessionService.saveUser(user)
      .then(() => dispatch(loginSuccess()));
    }).catch(() => {
      dispatch(loginError());
      alertErrors(messages.loginError);
    });
  };

export const logout = () =>
  () => {
    userApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
    }).catch((err) => {
      throw (err);
    });
  };
  