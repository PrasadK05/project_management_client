import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function MobileHeader({ title }) {
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
          <Image src="/assets/Logout.svg" />
        </Box>
      </Box>
    </Box>
  );
}
