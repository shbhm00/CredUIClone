import {Login, Login1} from '../action/actionTypes';
const initialState = {
  userDetails: '',
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Phone':
      return {...state, userDetails: action.payload};
    default:
      return state;
  }
};
