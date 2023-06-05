import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authLoginSucc } from "../redux/auth/auth.action";

export default function PrivateRoute({ children }) {
  let token = Cookies.get("token");
  const dispatch = useDispatch();
  if (token) {
    dispatch(authLoginSucc({ token}));
    return children;
  }
  return <Navigate to={"/login"} />;
}
