import {combineReducers} from 'redux';

import {authReducer} from './userdetails';
const appReducer = combineReducers({
  authReducer,
});

export default appReducer;
