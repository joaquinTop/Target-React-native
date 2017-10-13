import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  loading: false
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_SIGNUP:
    case types.SUBMIT_LOGIN: {
      return state.set('loading', true);
    }
    case types.SIGNUP_SUCCESS:
    case types.SIGNUP_ERROR:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR: {
      return state.set('loading', false);
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
