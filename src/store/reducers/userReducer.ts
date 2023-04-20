import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_LOGOUT,
} from '~/store/constants';
import { IUserState, UserActionTypes } from '~/store/types';

const initialUserState: IUserState = {};

/**
 * User reducer
 * @param state - User state
 * @param action - User action
 */
const userReducer = (state = initialUserState, action: UserActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REQUEST:
      return {
        loading: true,
      };
    case USER_SUCCESS:
      return {
        user: payload.user,
      };
    case USER_FAILURE:
      return {
        error: payload.error,
      };
    case USER_LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
export default userReducer;
