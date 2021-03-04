const INITIAL_STATE = {
  global: {},
  byCountry: [],
  totalData: 0,
};

export const covidReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_GLOBAL_COVID':
      return {
        ...state,
        global: action.payload,
      };
    case 'FETCH_COUNTRY_COVID':
      return {
        ...state,
        byCountry: action.payload,
      };

    case 'FETCH_TOTAL_COVID':
      return {
        ...state,
        totalData: action.payload,
      };
    default:
      return state;
  }
};
