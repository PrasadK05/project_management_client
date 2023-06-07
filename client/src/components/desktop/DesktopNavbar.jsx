import { Box, Divider, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutProcess } from "../../redux/auth/auth.action";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function DesktopNavbar() {
  let location = useLocation();
  let { data } = useSelector((store) => store.auth);
  let navigate = useNavigate();
  // handeling logout
  let handleLogout = () => {
    logoutProcess(data)
      .then((res) => {
        if (res) {
          alert("logout succesful");
          Cookies.remove("token");
          navigate("/login");
        } else {
          alert("logout unsuccesful");
        }
      })
      .catch((err) => {
        alert("logout unsuccesful");
      });
  };
  return (
    <>
      <Box
        h="100vh"
        w="5%"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        py={"20px"}
        bg="#FFFFFF"
      >
        <Box
          width={"50%"}
          h="60%"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"30px"}
        >
          <Link to={"/"}>
            <Image
              src={
                location.pathname === "/"
                  ? "/assets/Dashboard-active.svg"
                  : "/assets/Dashboard.svg"
              }
              alt="error"
            />
          </Link>
          <Link to={"/projects"}>
            <Image
              src={
                location.pathname === "/projects"
                  ? "/assets/Project-list-active.svg"
                  : "/assets/Project-list.svg"
              }
              alt="error"
            />
          </Link>
          <Divider w="100%" />
          <Link to={"/addProject"}>
            <Image
              src={
                location.pathname === "/addProject"
                  ? "/assets/create-project-active.svg"
                  : "/assets/create-project.svg"
              }
              alt="error"
            />
          </Link>
        </Box>
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Link to={""} onClick={handleLogout}>
            <Image src="/assets/Logout.svg" alt="error"/>
          </Link>
        </Box>
      </Box>
    </>
  );
}
