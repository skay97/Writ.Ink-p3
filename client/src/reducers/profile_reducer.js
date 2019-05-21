import {
  FETCH_PROFILE,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  FETCH_PROFILES,
  PROFILE_ERROR,
  UPDATE_SUBSCRIPTION,
} from '../actions/types';
import _ from 'lodash';

export default function(state={}, action) {
  // Attention!!! The state object here refers to state.profile, instead of the application state.

  switch(action.type) {
    case FETCH_PROFILE:
      return { ...state, user: action.payload };
    case CLEAR_PROFILE:  // clear the local redux state
      return { ... state, user: action.payload }; // AM New
    case UPDATE_PROFILE:
      return { ...state, user: action.payload };
    case FETCH_PROFILES:
      return _.mapKeys(action.payload, '_id'); // AM New
    case PROFILE_ERROR:
      return { ...state, user: action.payload }; // AM New
    case UPDATE_SUBSCRIPTION:
      return { ...state, [action.payload._id]: action.payload }; // AM New
    default:
      return state;
  }
}