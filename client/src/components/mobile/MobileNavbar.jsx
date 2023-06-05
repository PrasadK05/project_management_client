import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <Box
      w="100%"    
      position={"fixed"}
      bottom={"0px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px="35px"
      h="60px"
      borderTopRadius={"30px"}
      zIndex={1000}
      bg="#FFFFFF"
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Link to={"/"}>
        <Image src="/assets/Dashboard.svg" />
      </Link>
      <Link to={"/"}>
        <Image src="/assets/Project-list.svg" />
      </Link>
      <Link to={"/"}>
        <Image src="/assets/create-project.svg" />
      </Link>
    </Box>
  );
}
