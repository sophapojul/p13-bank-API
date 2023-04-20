import { ThunkAction } from 'redux-thunk';

import { putProfile } from '~/services';
import { AppDispatch, RootState } from '~/store';
import {
  PROFILE_TOGGLE_FORM,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from '~/store/constants';
import { ProfileActionTypes } from '~/store/types';
import { IGetUser } from '~/types';

export const profileToggleForm = (profileToggleForm?: boolean) => {
  return {
    type: PROFILE_TOGGLE_FORM,
    payload: {
      profileToggleForm: !profileToggleForm,
    },
  };
};

/**
 * Update profile request action creator
 * @returns Profile request action
 */
const profileRequest = () => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: {
      loading: true,
    },
  };
};

/**
 * Update profile success action creator
 * @param profile - User informations to update
 * @returns Update profile success action
 */
const profileSuccess = (profile: IGetUser) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: {
      profile,
    },
  };
};

/**
 * Update profile failure action creator
 * @param error - Error message if the request fails
 * @returns Update profile failure action
 */
const profileFailure = (error: string) => {
  return {
    type: UPDATE_PROFILE_FAILURE,
    payload: {
      error,
    },
  };
};

/**
 * Update user informations
 * @param data - User informations to update
 * @returns ThunkAction to update user informations
 */
export const fetchProfile = (
  data: IGetUser
): ThunkAction<void, RootState, unknown, ProfileActionTypes> => {
  return async (dispatch: AppDispatch) => {
    dispatch(profileRequest());
    try {
      const res = await putProfile(data);
      dispatch(profileSuccess(res.body));
    } catch (err: unknown) {
      if (err instanceof Error) {
        dispatch(profileFailure(err.message));
      }
    }
  };
};
