const initialState = {
  userDetails: '',
  name: '',
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Phone':
      return {...state, userDetails: action.payload};
    case 'name': {
      return {...state, name: action.payload};
    }
    default:
      return state;
  }
};
