import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function MobileOverviewCard({ title, loading, error, count }) {
  return (
    <Box
      borderLeft={"5px solid #0cc9e8"}
      borderRadius={"5px"}
      bg="#FFFFFF"    
      h="100px"
      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      pl="15px"
      pb="30px"
    >
      <Text fontSize={"md"}>{title}</Text>
      <Text fontSize={"5xl"} fontWeight={"bold"}>
        {count}
      </Text>
      <Spinner
        size={"lg"}
        mt="10px"
        mb="10px"
        display={loading ? "block" : "none"}
      />
      <Text display={error ? "block" : "none"} color={"red"}>
        Error
      </Text>
    </Box>
  );
}
