import {
  PROFILE_TOGGLE_FORM,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
} from '~/store/constants';
import { IProfileState, ProfileActionTypes } from '~/store/types';

const initialProfileState: IProfileState = {
  profileForm: true,
};

/**
 * Update user profile reducer
 * @param state - User profile state
 * @param action - User Update profile action
 */
const profileReducer = (
  state = initialProfileState,
  action: ProfileActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_TOGGLE_FORM:
      return {
        profileForm: !state.profileForm,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        profile: payload.profile,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        error: payload.error,
      };
    default:
      return state;
  }
};
export default profileReducer;
