import { Box, Button, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

export default function DesktopTableRow() {
  return (
    <>
      <Tr>
        <Td>
          <Box>
            <Text>XYZ</Text>
            <Text>XYZ</Text>
          </Box>
        </Td>
        <Td>Business</Td>
        <Td>Internal</Td>
        <Td> compressor</Td>
        <Td>Quality A</Td>
        <Td>High</Td>
        <Td>Strategy</Td>
        <Td>Pune</Td>
        <Td>Running</Td>
        <Td>
          <Button
            size={"sm"}
            color="#FFFFFF"
            bg="#025aab"
            px="15px"
            borderRadius={"15px"}
          >
            Start
          </Button>
        </Td>
        <Td>
          {" "}
          <Button
            size={"sm"}
            px="15px"
            borderRadius={"15px"}
            bg="#FFFFFF"
            border={"1px solid #025aab"}
            color="#025aab"
          >
            Close
          </Button>
        </Td>
        <Td>
          {" "}
          <Button
            size={"sm"}
            px="15px"
            borderRadius={"15px"}
            bg="#FFFFFF"
            border={"1px solid #025aab"}
            color="#025aab"
          >
            Cancel
          </Button>
        </Td>
      </Tr>
    </>
  );
}
