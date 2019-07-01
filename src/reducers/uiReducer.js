import {
  FETCH_SALES_BEGIN,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILURE
} from '../actions/uiActions';

const initialState = {
  sales: {},
  loading: false,
  error: null
};

export default function eventReducer(state = initialState, action) {
  switch(action.type) {
  case FETCH_SALES_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };

  case FETCH_SALES_SUCCESS:
    return {
      ...state,
      loading: false,
      sales: action.payload
    };

  case FETCH_SALES_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      sales: []
    };

  default:
    return state;
  }
}