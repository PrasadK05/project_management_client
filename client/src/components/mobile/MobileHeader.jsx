import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { logoutProcess } from "../../redux/auth/auth.action";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function MobileHeader({ title }) {
  let { data } = useSelector((store) => store.auth);
  let navigate = useNavigate();
// logout handler
  let handleLogout = () => {
    logoutProcess(data)
      .then((res) => {
        if (res) {
          alert("logout succesful");
          Cookies.remove('token')
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
    <Box w="100%" position={"sticky"} top={"0px"} zIndex={1000}>
      <Image src="/assets/Header-bg.svg" w="100%" />
      <Box
        w="90%"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"absolute"}
        top={"5px"}
        left={"20px"}       
      >
        <Box display={"flex"} gap={"20px"}>
          <Image src="/assets/back arrow.svg" />
          <Text fontSize={"xl"} fontWeight={"bold"} color={"#FFFFFF"}>
            {title}
          </Text>
        </Box>
        <Box>
          <Image src="/assets/Logout.svg" cursor={"pointer"} onClick={handleLogout}/>
        </Box>
      </Box>
    </Box>
  );
}
