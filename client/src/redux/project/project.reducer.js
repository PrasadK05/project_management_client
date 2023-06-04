import { ACC_ERROR, ACC_LOADING, ACC_SUCCESS } from "./account.type";

const accInitalState = {
  loading: false,
  projects: [],
  total: 0,
  error: false,
};

export const projectReducer = (state = accInitalState, action) => {
  switch (action.type) {
    case ACC_SUCCESS: {
      return {
        ...state,
        projects: action.payload.result,
        total: action.payload.total,
        loading: false,
        error: false,
      };
    }
    case ACC_ERROR: {
      return {
        ...state,
        error: true,
        projects: [],
        total: 0,
        loading: false,
      };
    }
    case ACC_LOADING: {
      return {
        ...state,
        loading: true,
        projects: [],
        total: 0,
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};
