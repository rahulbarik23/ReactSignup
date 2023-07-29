export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const fetchProfileSuccess = (user) => ({
    type: 'FETCH_PROFILE_SUCCESS',
    payload: user,
  });