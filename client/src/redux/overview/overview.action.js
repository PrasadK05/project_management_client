import {
  OVERVIEW_ERROR,
  OVERVIEW_LOADING,
  OVERVIEW_SUCCESS,
} from "./customer.type";
import axios from "axios";

const baseUrl = "https://project-management-zyyv.onrender.com";

export const overviewSucc = (payload) => {
  return {
    type: OVERVIEW_SUCCESS,
    payload,
  };
};

export const overviewError = () => {
  return {
    type: OVERVIEW_ERROR,
  };
};

export const overviewLoad = () => {
  return {
    type: OVERVIEW_LOADING,
  };
};

export const getOverview = (data) => async (dispatch) => {
  dispatch(overviewLoad());
  let headers = { Authorization: `Bearer ${data.token}` };

  try {
    let res = await axios.get(`${baseUrl}/projects/overview`, { headers });

    if (res.status === 200) {
      dispatch(overviewSucc(res.data.transactions));
      return true;
    } else {
      dispatch(overviewError());
      return false;
    }
  } catch (error) {
    dispatch(overviewError());
    return false;
  }
};

