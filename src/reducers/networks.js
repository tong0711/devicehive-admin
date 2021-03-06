import { List, Map } from 'immutable';
import constants from '../constants';

const initialState = Map({
  networksList : List([]),
  network : Map({})
});

/**
 * Networks reducer
 * 
 * @export
 * @param {Object} [state=initialState] 
 * @param {Object} action 
 * @returns 
 */
export default function networks(state = initialState, action){
  switch (action.type){
  case constants.networks.GET_NETWORKS_REQUEST:
    return state
      .set(`networksList`, List([]));
  case constants.networks.GET_NETWORKS_SUCCESS:
    return state
      .set(`networksList`, List(action.payload));
  case constants.networks.GET_NETWORKS_FAILURE:
    return state;
  case constants.auth.LOGOUT:
    return state
      .set(`networksList`, List([]))
      .set(`network`, Map({}));
  default:
    return state;
  }
}