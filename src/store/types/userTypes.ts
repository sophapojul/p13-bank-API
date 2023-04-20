import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_LOGOUT,
} from '~/store/constants';
import { IGetUser } from '~/types';

export interface IUserRequestAction {
  type: typeof USER_REQUEST;
  payload: {
    loading: boolean;
    user?: IGetUser;
    error?: string;
  };
}

export interface IUserSuccessAction {
  type: typeof USER_SUCCESS;
  payload: {
    loading?: boolean;
    user: IGetUser;
    error?: string;
  };
}

export interface IUserFailureAction {
  type: typeof USER_FAILURE;
  payload: {
    loading?: boolean;
    user?: IGetUser;
    error: string;
  };
}

export interface IUserLogoutAction {
  type: typeof USER_LOGOUT;
  payload: {
    loading?: boolean;
    user?: IGetUser;
    error?: string;
  };
}

export interface IUserState {
  loading?: boolean;
  user?: IGetUser;
  error?: string;
}

export type UserActionTypes =
  | IUserRequestAction
  | IUserSuccessAction
  | IUserFailureAction
  | IUserLogoutAction;
