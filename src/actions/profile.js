import { CALL_API } from '../middleware/api';
import constants from '../constants';

export function getProfile(){
  return dispatch =>
    dispatch({
      [CALL_API] : {
        types : [constants.profile.GET_PROFILE_REQUEST, constants.profile.GET_PROFILE_SUCCESS, constants.profile.GET_PROFILE_FAILURE],
        endpoint : `/user/current`
      }
    })
}

export function updateProfile(body){
  return dispatch =>
    dispatch({
      [CALL_API] : {
        types : [constants.profile.UPDATE_PROFILE_REQUEST, constants.profile.UPDATE_PROFILE_SUCCESS, constants.profile.UPDATE_PROFILE_FAILURE],
        endpoint : `/user/current`,
        method : `PUT`,
        body
      }
    })
}