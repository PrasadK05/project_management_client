import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT_SUCCESS,
} from "./auth.type";
import Cookies from "js-cookie";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

// login success action
export const authLoginSucc = (payload) => {
  return {
    type: AUTH_LOG_IN_SUCCESS,
    payload,
  };
};

// login fail action
export const authLoginFail = () => {
  return {
    type: AUTH_LOG_IN_ERROR,
  };
};

// login loading action
export const authLoginLoad = () => {
  return {
    type: AUTH_LOG_IN_LOADING,
  };
};

// logout success action
export const authLogout = () => {
  return {
    type: AUTH_LOG_OUT_SUCCESS,
  };
};

// async login function
export const loginProcess = (data) => async (dispatch) => {
  dispatch(authLoginLoad());
  try {
    let res = await axios.post(`${baseUrl}/login`, data);

    if (res.status === 200) {
      dispatch(authLoginSucc(res.data));
      Cookies.set("token", res.data.token);
      return res.data.Message;
    } else {
      dispatch(authLoginFail());
      return false;
    }
  } catch (error) {
    dispatch(authLoginFail());
    return false;
  }
};

// async logout function
export const logoutProcess = async (data) => {
  let headers = { Authorization: `Bearer ${data.token}` };
  try {
    let res = await axios.get(`${baseUrl}/logout`, { headers });
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
