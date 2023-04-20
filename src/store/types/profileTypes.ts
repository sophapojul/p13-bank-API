import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  PROFILE_TOGGLE_FORM,
} from '~/store/constants';
import { IGetUser } from '~/types';

export interface IProfileToggleForm {
  type: typeof PROFILE_TOGGLE_FORM;
  payload: {
    profileForm: boolean;
    loading?: boolean;
    profile?: IGetUser;
    error?: string;
  };
}

export interface IUpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: {
    loading: boolean;
    profile?: IGetUser;
    error?: string;
  };
}

export interface IUpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: {
    loading?: boolean;
    profile: IGetUser;
    error?: string;
  };
}

export interface IUpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
  payload: {
    loading?: boolean;
    profile?: IGetUser;
    error?: string;
  };
}

export interface IProfileState {
  profileForm?: boolean;
  loading?: boolean;
  profile?: IGetUser;
  error?: string;
}

export type ProfileActionTypes =
  | IProfileToggleForm
  | IUpdateProfileRequestAction
  | IUpdateProfileSuccessAction
  | IUpdateProfileFailureAction;
