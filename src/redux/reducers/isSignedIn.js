const INITIAL_STATE = {
  isSignedIn: false,
  username: '',
};

export const isSIgnedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SIGNED_IN':
      return {
        ...state,
        isSignedIn: true,
        username: action.payload,
      };
    case 'USER_LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
