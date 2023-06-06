import axios from "axios";
import { STATS_ERROR, STATS_LOADING, STATS_SUCCESS } from "./stats.type";

const baseUrl = "https://project-management-zyyv.onrender.com";
//stats success action
export const statsSucc = (payload) => {
  return {
    type: STATS_SUCCESS,
    payload,
  };
};
// stats error action
export const statsError = () => {
  return {
    type: STATS_ERROR,
  };
};
// stats load action
export const statsLoad = () => {
  return {
    type: STATS_LOADING,
  };
};
// geting stat data
export const getStats = (data) => async (dispatch) => {
  dispatch(statsLoad());
  let headers = { Authorization: `Bearer ${data.token}` };

  try {
    let res = await axios.get(`${baseUrl}/projects/stats`, { headers });
    if (res.status === 200) {
      dispatch(statsSucc(res.data.project));
      return true;
    } else {
      dispatch(statsError());
      return false;
    }
  } catch (error) {
    dispatch(statsError());
    return false;
  }
};
