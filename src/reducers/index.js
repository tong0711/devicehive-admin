import auth from './auth';
import devices from './devices';
import networks from './networks';
import polling from './polling';
import jwt from './jwt';
import users from './users';
import profile from './profile';

import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  devices,
  networks,
  polling,
  jwt,
  users,
  profile
});