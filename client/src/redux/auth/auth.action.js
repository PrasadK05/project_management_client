import {
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_IN_LOADING,
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT_SUCCESS,
} from "./auth.type";
import Cookies from "js-cookie";
import axios from "axios";

const baseUrl = "https://project-management-zyyv.onrender.com";

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
console.log(res);
    if (res.status===200) {
      dispatch(authLoginSucc(res.data));
      Cookies.set("token", res.data.token);      
      return res.data.Message;
    } else {
      dispatch(authLoginFail());
      return false;
    }
  } catch (error) {
    console.log(error);
    dispatch(authLoginFail());
    return false;
  }
};

// async logout function
export const logoutProcess = (data) => async (dispatch) => {
  dispatch(authLoginLoad());
  let headers = { Authorization: `Bearer ${data.token}` };
  try {
    let res = await axios.get(`${baseUrl}/logout`, { headers });
    if (res.status === 200) {
      dispatch(authLogout());
      return true;
    } else {
      dispatch(authLoginFail());
      return false;
    }
  } catch (error) {
    dispatch(authLoginFail());
    return false;
  }
};
