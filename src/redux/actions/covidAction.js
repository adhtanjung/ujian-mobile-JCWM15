import axios from 'axios';

export const fetchCovidTotalAction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      'https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1',
    );

    dispatch({
      type: 'FETCH_GLOBAL_COVID',
      payload: response.data.Global,
    });
  };
};

export const fetchCovidByCountryAction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      'https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1',
    );

    dispatch({
      type: 'FETCH_COUNTRY_COVID',
      payload: response.data.Countries,
    });
  };
};

export const fetchTotalDataAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        'https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1',
      );
      dispatch({
        type: 'FETCH_TOTAL_COVID',
        payload: res.data.Countries.length,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
