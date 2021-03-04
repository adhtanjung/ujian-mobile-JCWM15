import {authReducer} from './authReducer';
import {covidReducer} from './covidReducer';
import {isSIgnedInReducer} from './isSignedIn';

import {combineReducers} from '@reduxjs/toolkit';
export default combineReducers({
  auth: authReducer,
  covid: covidReducer,
  isSignedIn: isSIgnedInReducer,
});
