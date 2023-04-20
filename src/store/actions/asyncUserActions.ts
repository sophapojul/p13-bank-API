import { ThunkAction } from 'redux-thunk';

import { getUser } from '~/services';
import { AppDispatch, RootState } from '~/store';
import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_LOGOUT,
} from '~/store/constants';
import { UserActionTypes } from '~/store/types';
import { IGetUser } from '~/types';

/**
 * User request action creator
 * @returns User request action
 */
const userRequest = () => {
  return {
    type: USER_REQUEST,
    payload: {
      loading: true,
    },
  };
};

/**
 * User success action creator
 * @param user - User informations
 * @returns User success action
 */
const userSuccess = (user: IGetUser) => {
  return {
    type: USER_SUCCESS,
    payload: {
      user,
    },
  };
};

/**
 * User failure action creator
 * @param error - Error message if the request fails
 * @returns User failure action
 */
const userFailure = (error: string) => {
  return {
    type: USER_FAILURE,
    payload: {
      error,
    },
  };
};

/**
 * User logout action creator
 * @param error - Error message if the request fails
 * @returns User logout action
 */
const logoutAction = (error = '') => {
  return {
    type: USER_LOGOUT,
    payload: {
      loading: false,
      user: {},
      error,
    },
  };
};

/**
 *  Get user informations from API and dispatch actions
 * @returns ThunkAction to get user informations
 */
const fetchUser = (): ThunkAction<
  void,
  RootState,
  unknown,
  UserActionTypes
> => {
  return async (dispatch: AppDispatch) => {
    dispatch(userRequest());
    try {
      const res = await getUser();
      res && dispatch(userSuccess(res.body));
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(userFailure(err.message));
      }
    }
  };
};

/**
 * Logout user
 * @returns Dispatch logout action
 */
const logoutUser = () => {
  return (dispatch: AppDispatch) => {
    dispatch(logoutAction());
  };
};

export { fetchUser, logoutUser };
