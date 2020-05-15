import {
  GET_BALANCE_STARTED,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILURE
} from '../action/type';

const initialState = {
  balance: 0
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BALANCE_STARTED:
      return {
        balance: 'Loading...'
      };
    case GET_BALANCE_SUCCESS:
      return {
        balance: action.data
      };
    case GET_BALANCE_FAILURE:
      return {
        balance: action.error
      };
    default:
      return state;
  }
};

export default balanceReducer;
