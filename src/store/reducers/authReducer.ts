import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '~/store/constants';
import { IAuthState, AuthActionTypes } from '~/store/types/authTypes';

export const initialAuthState: IAuthState = {};

/**
 * Authorization reducer
 * @param state - Authorization state
 * @param action - Authorization action
 */
const authReducer = (state = initialAuthState, action: AuthActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        token: payload.token,
      };
    case LOGIN_FAILURE:
      return {
        error: payload.error,
      };
    case LOGOUT:
      return initialAuthState;
    default:
      return state;
  }
};

export default authReducer;
