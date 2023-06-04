import {
  OVERVIEW_ERROR,
  OVERVIEW_LOADING,
  OVERVIEW_SUCCESS,
} from "./customer.type";

const cusInitalState = {
  loading: false,
  customerTr: {},
  error: false,
};


export const overviewReducer = (state = cusInitalState, action) => {
  switch (action.type) {
    case OVERVIEW_SUCCESS: {
      return {
        ...state,
        customerTr: action.payload,
        loading: false,
        error: false,
      };
    }
    case OVERVIEW_ERROR: {
      return {
        ...state,
        error: true,
        customerTr: {},
        loading: false,
      };
    }
    case OVERVIEW_LOADING: {
      return {
        ...state,
        loading: true,
        customerTr: {},
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};
