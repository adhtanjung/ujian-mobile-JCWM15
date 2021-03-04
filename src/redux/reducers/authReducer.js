const INITIAL_STATE = {
  loading: false,
  username: '',
  error: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        loading: true,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        username: action.payload,
      };

    case 'AUTH_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.err.message,
      };
    default:
      return state;
  }
};
