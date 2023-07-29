// reducers.js
const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'FETCH_PROFILE_SUCCESS':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  