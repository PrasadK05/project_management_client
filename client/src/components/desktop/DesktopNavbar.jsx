import { Box, Divider, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DesktopNavbar() {
  let location = useLocation();
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
            <Image src="/assets/Dashboard.svg" />
          </Link>
          <Link to={"/"}>
            <Image src="/assets/Project-list.svg" />
          </Link>
          <Divider w="100%" />
          <Link to={"/"}>
            <Image src="/assets/create-project.svg" />
          </Link>
        </Box>
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Image src="/assets/Logout.svg" />
          </Link>
        </Box>
      </Box>
    </>
  );
}
