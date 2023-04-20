import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '~/store/constants';

export interface ILoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    loading: boolean;
    token?: string;
    error?: string;
  };
}

export interface ILoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    loading?: boolean;
    token: string;
    error?: string;
  };
}

export interface ILoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    loading?: boolean;
    token?: string;
    error: string;
  };
}

export interface ILogoutAction {
  type: typeof LOGOUT;
  payload: {
    loading?: boolean;
    token?: string;
    error?: string;
  };
}

export interface IAuthState {
  loading?: boolean;
  token?: string;
  error?: string;
}

export type AuthActionTypes =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailureAction
  | ILogoutAction;
