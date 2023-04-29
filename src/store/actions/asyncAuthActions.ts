import { authenticate } from '~/services';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '~/store/constants';
import { AppDispatch, RootState } from '~/store';
import { AuthActionTypes } from '../types';
import { ThunkAction } from 'redux-thunk';

/**
 * Login request action creator
 * @returns Login request action
 */
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      loading: true,
    },
  };
};

/**
 * Login success action creator
 * @param token - User token
 * @returns login success action
 */
const loginSuccess = (token: string) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};

/**
 * Login failure action creator
 * @param error - error message
 * @returns Login failure action
 */
const loginFailure = (error: string) => {
  return {
    type: LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

/**
 * Logout action creator
 * @param error - Error message if any
 * @returns Logout action
 */
const logoutAction = (error?: string) => {
  return {
    type: LOGOUT,
    payload: {
      error,
    },
  };
};
/**
 * Login action
 * @param email password - Credentials to sign in with email and password
 * @returns Dispatch login action
 */
const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): ThunkAction<void, RootState, unknown, AuthActionTypes> => {
  return async (dispatch: AppDispatch) => {
    dispatch(loginRequest());
    try {
      await authenticate({ email, password });
      const token = localStorage.getItem('token');
      token && dispatch(loginSuccess(token));
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(loginFailure(err.message));
      }
    }
  };
};

/** Logout action */
const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutAction());
};

export { login, logout };
