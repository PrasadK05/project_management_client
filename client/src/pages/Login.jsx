import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import DesktopLoginForm from "../components/desktop/DesktopLoginForm";
import MobileLoginForm from "../components/mobile/MobileLoginForm";

export default function Login() {
  let backgroundImage = "/assets/login-bg-1.svg";
  return (
    <>
      {/* for desktop */}
      <Box position={"relative"}>
        <Image
          src="/assets/login-bg-1.svg"
          w="100%"
          display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        />
        <DesktopLoginForm />
      </Box>
      {/* for mobile */}
      <Box
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        h="90vh"
        border={"1px solid red"}
      >
        <Box w="100%" position={"relative"}>
          <Image
            src="/assets/login-mobbg-1.png"
            w="100%"
            h="200px"
            border={"1px solid black"}
          />
          <Box
            position={"absolute"}
            top={"5%"}
            left={"25%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap="5px"
            py="20px"
          >
            <Image src="/assets/Logo.svg" />
            <Text color={"#FFFFFF"}>Online Project Management</Text>
          </Box>
          <MobileLoginForm />
        </Box>
      </Box>
    </>
  );
}
