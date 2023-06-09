import {
  PROJECT_ERROR,
  PROJECT_LOADING,
  PROJECT_SUCCESS,
} from "./project.type";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
// project success action
export const projectSucc = (payload) => {
  return {
    type: PROJECT_SUCCESS,
    payload,
  };
};
// project error action
export const projectError = () => {
  return {
    type: PROJECT_ERROR,
  };
};
// project loading action
export const projectLoad = () => {
  return {
    type: PROJECT_LOADING,
  };
};
// get project data from api
export const getProj =
  (data, search, sort, page = 1) =>
  async (dispatch) => {
    dispatch(projectLoad());
    let headers = { Authorization: `Bearer ${data.token}` };
    let res;

    try {
      if (search && sort) {
        res = await axios.get(
          `${baseUrl}/projects?page=${page}&q=${search}&sort=${sort}`,
          { headers }
        );
      } else if (search) {
        res = await axios.get(`${baseUrl}/projects?page=${page}&q=${search}`, {
          headers,
        });
      } else if (sort) {
        res = await axios.get(`${baseUrl}/projects?page=${page}&sort=${sort}`, {
          headers,
        });
      } else {
        res = await axios.get(`${baseUrl}/projects?page=${page}`, { headers });
      }

      if (res.status === 200) {
        dispatch(projectSucc(res.data));
        return true;
      } else {
        dispatch(projectError());
        return false;
      }
    } catch (error) {
      dispatch(projectError());
      return false;
    }
  };

//adding project
export const addProj = async (token, data) => {
  let headers = { Authorization: `Bearer ${token}` };
  try {
    let res = await axios.post(`${baseUrl}/projects`, { ...data }, { headers });

    return res.data.status;
  } catch (error) {
    return false;
  }
};
//updating project
export const updateProj = async (token, data, id) => {
  let headers = { Authorization: `Bearer ${token}` };

  try {
    let res = await axios.patch(`${baseUrl}/projects/${id}`, data, { headers });

    return res.data.status;
  } catch (error) {
    return false;
  }
};
