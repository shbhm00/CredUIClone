// const DATA = require('../dummy_data/albumCategories');
// import {
//   Login,
//   Login1,
//   Data,
//   Add_Wishlist,
//   Remove_Wishlist,
// } from './actionTypes';
export const PhoneNumber = payload => {
  return dispatch => {
    dispatch({
      type: 'Phone',
      payload: payload,
    });
  };
};
export const UserName = payload => {
  return dispatch => {
    dispatch({
      type: 'name',
      payload: payload,
    });
  };
};

// export const fetchData = data => {
//   return dispatch => {
//     dispatch({
//       type: Data,
//       payload: data,
//     });
//   };
// };
// export const Wishlist = data => {
//   return dispatch => {
//     dispatch({
//       type: Add_Wishlist,
//       payload: data,
//     });
//   };
// };

// export const Rem_Wishlist = data => {
//   return dispatch => {
//     dispatch({
//       type: Remove_Wishlist,
//       payload: data,
//     });
//   };
// };
