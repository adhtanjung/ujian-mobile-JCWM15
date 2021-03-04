export const userLoginAction = (username) => {
  return async (dispatch) => {
    dispatch({
      type: 'AUTH_SUCCESS',
      payload: username,
    });

    dispatch({
      type: 'USER_SIGNED_IN',
      payload: username,
    });
  };
};

export const userLogoutAction = () => {
  return async (dispatch) => {
    dispatch({
      type: 'USER_LOGOUT',
    });
  };
};

export const keepLoginAction = (username) => {
  return {
    type: 'AUTH_SUCCESS',
    payload: username,
  };
};
